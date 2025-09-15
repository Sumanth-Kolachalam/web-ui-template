import type { ServiceKey } from '@shared/types';

/**
 * Returns the full service URL for the given service key.
 *
 * @param service - The target service
 * @param endPoint - Extra path to append at the end
 * @param useGateway - If true, will return the gateway URL + the target service's context URL
 */
const getServiceUrl = (service: ServiceKey, endPoint = '', useGateway = true): string => {
    const baseUrls: Record<ServiceKey, string> = {
        user: import.meta.env.VITE_PF_USER_SERVICE_URL ?? '',
        mdms: import.meta.env.VITE_PF_MDMS_SERVICE_URL ?? '',
        workflow: import.meta.env.VITE_PF_WF_SERVICE_URL ?? '',
        fileStore: import.meta.env.VITE_PF_FILESTORE_SERVICE_URL ?? '',
        localization: import.meta.env.VITE_PF_LOCALIZATION_SERVICE_URL ?? '',
        dashboard: import.meta.env.VITE_PF_DASHBOARD_SERVICE_URL ?? '',
        reports: import.meta.env.VITE_PF_REPORTS_SERVICE_URL ?? '',
        gateway: import.meta.env.VITE_PF_GATEWAY_SERVICE_URL ?? '',
    };

    const contextUrls: Record<ServiceKey, string> = {
        user: import.meta.env.VITE_PF_USER_SERVICE_CONTEXT_URL ?? '',
        mdms: import.meta.env.VITE_PF_MDMS_SERVICE_CONTEXT_URL ?? '',
        workflow: import.meta.env.VITE_PF_WF_SERVICE_CONTEXT_URL ?? '',
        fileStore: import.meta.env.VITE_PF_FILESTORE_SERVICE_CONTEXT_URL ?? '',
        localization: import.meta.env.VITE_PF_LOCALIZATION_SERVICE_CONTEXT_URL ?? '',
        dashboard: import.meta.env.VITE_PF_DASHBOARD_SERVICE_CONTEXT_URL ?? '',
        reports: import.meta.env.VITE_PF_REPORTS_SERVICE_CONTEXT_URL ?? '',
        gateway: '',
    };

    if (!baseUrls[service] && !contextUrls[service]) {
        return 'No service with the given name found.';
    }

    const base = useGateway ? baseUrls.gateway : baseUrls[service];
    return base + contextUrls[service] + endPoint;
};

async function apiRequest<T = unknown>({
    method = 'GET',
    headers = {},
    body,
    service,
    endpoint = '',
    useGateway = true,
}: {
    method?: string;
    headers?: Record<string, string>;
    body?: FormData | object;
    service: ServiceKey;
    endpoint?: string;
    useGateway?: boolean;
}): Promise<T | Blob | string> {
    try {
        const url = getServiceUrl(service, endpoint, useGateway);

        const isFormData = body instanceof FormData;

        const options: RequestInit = {
            method,
            headers: {
                ...headers,
            },
        };

        if (body && method !== 'GET') {
            if (isFormData) {
                options.body = body;
            } else {
                options.headers = {
                    ...options.headers,
                    'Content-Type': 'application/json',
                };
                options.body = JSON.stringify(body);
            }
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const contentType = response.headers.get('Content-Type') ?? '';

        if (contentType.includes('application/json')) {
            return (await response.json()) as T;
        }

        if (
            contentType.includes('application/octet-stream') ||
            contentType.includes('application/pdf') ||
            contentType.startsWith('image/') ||
            contentType.startsWith('video/')
        ) {
            return await response.blob();
        }

        if (contentType.startsWith('text/')) {
            return await response.text();
        }

        return await response.blob(); // final fallback
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}

export { apiRequest };
