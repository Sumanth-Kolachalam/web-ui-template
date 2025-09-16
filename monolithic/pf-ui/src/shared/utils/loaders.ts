import type { Role, SelectedOrgId, UserDetails } from '@shared/types';
import { apiRequest } from './apiRequest';
import { queryClient } from './queryClient';
import { STORAGE_KEYS } from './constants';

function loadFromLocalStorage<T>(key: string): T | null {
    const stored = localStorage.getItem(key);
    if (!stored) return null;

    try {
        return JSON.parse(stored) as T;
    } catch {
        return stored as unknown as T;
    }
}

export async function landingLoader() {
    const authToken = loadFromLocalStorage<string>(STORAGE_KEYS.AUTH_TOKEN) ?? '';
    const userDetails = loadFromLocalStorage<UserDetails>(STORAGE_KEYS.USER_DETAILS) ?? null;
    const selectedOrg = loadFromLocalStorage<SelectedOrgId>(STORAGE_KEYS.ORG_ID) ?? null;
    const selectedRoleDetails = loadFromLocalStorage<Role>(STORAGE_KEYS.ROLE_IDS) ?? null;

    if (!userDetails) return;

    const data = await queryClient.fetchQuery({
        queryKey: ['myAccess', userDetails.uuid],
        queryFn: async () => {
            const response = await apiRequest({
                method: 'POST',
                service: 'mdms',
                endpoint: '/resource/access/_searchMyAccess',
                body: {
                    requestInfo: {
                        userInfo: {
                            userDetails,
                            selectedOrg,
                            selectedRoleDetails,
                        },
                        authToken,
                    },
                },
            });
            return response;
        },
    });

    return { data };
}
