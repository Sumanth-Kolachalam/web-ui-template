import { useState, useMemo, useCallback } from 'react';
import type {
    AuthContextValue,
    AuthProviderProps,
    LoginFormState,
    LogoutParams,
    Role,
    UserDetails,
    SelectedOrgId,
    LoginResponse,
} from '@shared/types';
import { useMutationApi } from '@shared/hooks';
import { AuthContext, STORAGE_KEYS } from '@shared/utils';

const parseJSON = <T,>(value: string | null, fallback: T): T => {
    try {
        return value ? (JSON.parse(value) as T) : fallback;
    } catch {
        return fallback;
    }
};

const defaultUserDetails: UserDetails = {
    uuid: '',
    firstName: '',
    lastName: '',
    username: '',
};

const defaultSelectedOrgId: SelectedOrgId = '';

const defaultSelectedRole: Role = {
    id: '',
};

// ===== Provider =====
const AuthProvider = ({ children }: AuthProviderProps) => {
    const [authToken, setAuthToken] = useState<string | null>(() => {
        return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    });

    const [userDetails, setUserDetails] = useState<UserDetails>(() => {
        return parseJSON(localStorage.getItem(STORAGE_KEYS.USER_DETAILS), defaultUserDetails);
    });

    const [selectedOrgId, setSelectedOrgId] = useState<SelectedOrgId>(() => {
        return parseJSON(localStorage.getItem(STORAGE_KEYS.ORG_ID), defaultSelectedOrgId);
    });

    const [selectedRoleDetails, setSelectedRoleDetails] = useState<Role[]>(() => {
        return parseJSON(localStorage.getItem(STORAGE_KEYS.ROLE_IDS), [defaultSelectedRole]);
    });

    const [error, setError] = useState<string | null>(null);

    // ===== Mutations using useMutationApi =====
    const loginMutation = useMutationApi<LoginResponse, LoginFormState>({
        service: 'user',
        endpoint: '/auth/_authenticate',
        method: 'POST',
        options: {
            onSuccess: (data: LoginResponse) => {
                setError(null);
                setAuthToken(data.token);
                setUserDetails(data.userDetails);
                setSelectedOrgId(data.selectedOrgId);
                setSelectedRoleDetails(data.selectedRoleIds);

                // Persist to storage
                localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, data.token);
                localStorage.setItem(STORAGE_KEYS.USER_DETAILS, JSON.stringify(data.userDetails));
                localStorage.setItem(STORAGE_KEYS.ORG_ID, JSON.stringify(data.selectedOrgId));
                localStorage.setItem(STORAGE_KEYS.ROLE_IDS, JSON.stringify(data.selectedRoleIds));

                logoutMutation.reset();
            },
            onError: (err: Error) => {
                setError(err.message);
            },
        },
    });

    const logoutMutation = useMutationApi<unknown, LogoutParams>({
        service: 'user',
        endpoint: '/auth/_logout',
        method: 'POST',
        options: {
            onSuccess: () => {
                setAuthToken(null);
                setUserDetails(defaultUserDetails);
                setSelectedOrgId(defaultSelectedOrgId);
                setSelectedRoleDetails([defaultSelectedRole]);

                // Clear storage
                localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
                localStorage.removeItem(STORAGE_KEYS.USER_DETAILS);
                localStorage.removeItem(STORAGE_KEYS.ORG_ID);
                localStorage.removeItem(STORAGE_KEYS.ROLE_IDS);

                loginMutation.reset();
            },
            onError: (err: Error) => {
                setError(err.message);
            },
        },
    });

    // ===== Public API =====
    const login = useCallback(
        (credentials: LoginFormState) => {
            setError(null);
            loginMutation.mutate(credentials);
        },
        [loginMutation],
    );

    const logout = useCallback(
        (params: LogoutParams) => {
            setError(null);
            logoutMutation.mutate(params);
        },
        [logoutMutation],
    );

    const contextValue = useMemo<AuthContextValue>(() => {
        return {
            authToken,
            setAuthToken,
            userDetails,
            setUserDetails,
            selectedOrgId,
            setSelectedOrgId,
            selectedRoleDetails,
            setSelectedRoleDetails,
            login,
            logout,
            isLoggingIn: loginMutation.isPending,
            loginError: error,
            isLoginSuccessfull: loginMutation.isSuccess,
            isLogoutSuccessfull: logoutMutation.isSuccess,
        };
    }, [
        authToken,
        userDetails,
        selectedOrgId,
        selectedRoleDetails,
        login,
        logout,
        loginMutation.isPending,
        loginMutation.isSuccess,
        error,
        logoutMutation.isSuccess,
    ]);

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
