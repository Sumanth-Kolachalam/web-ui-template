interface UserDetails {
    uuid: string;
    firstName: string;
    lastName: string;
    username: string;
}

type SelectedOrgId = string;

interface Role {
    id: string;
}

interface LoginResponse {
    token: string;
    userDetails: UserDetails;
    selectedOrgId: SelectedOrgId;
    selectedRoleIds: Role[];
    mobileOtpRequired: boolean;
    emailOtpRequired: boolean;
    maskedMobileNumber: number;
    maskedEmailId: string;
    message?: string;
    messageCode: string;
    idleTimeout: number;
}

interface LoginFormState {
    username: string;
    password: string;
    selectedOrgName: string;
}

type LogoutParams = {
    requestInfo: {
        authToken: string;
    };
};

interface AuthContextValue {
    authToken: string | null;
    setAuthToken: (token: string | null) => void;
    userDetails: UserDetails;
    setUserDetails: (details: UserDetails) => void;
    selectedOrgId: SelectedOrgId;
    setSelectedOrgId: (org: SelectedOrgId) => void;
    selectedRoleDetails: Role[];
    setSelectedRoleDetails: (role: Role[]) => void;
    login: (credentials: LoginFormState) => void;
    logout: (params: LogoutParams) => void;
    isLoggingIn: boolean;
    loginError: string | null;
    isLoginSuccessfull: boolean;
    isLogoutSuccessfull: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

interface OrgOption {
    label: string;
    value: string;
}

export { LogoutParams, AuthContextValue, AuthProviderProps, LoginFormState, LoginResponse, UserDetails, Role, SelectedOrgId, OrgOption };
