import {
    useMutation,
    type UseMutationResult,
    type UseMutationOptions,
} from '@tanstack/react-query';
import { apiRequest } from '@shared/utils';
import type { WriteApiParams } from '@shared/types';

export function useMutationApi<TData = unknown, TVariables = unknown>({
    service,
    endpoint,
    method = 'POST',
    useGateway = true,
    options,
}: WriteApiParams<TData, TVariables>): UseMutationResult<TData, Error, TVariables> {
    const opts = (options ?? {}) as UseMutationOptions<TData, Error, TVariables>;

    return useMutation<TData, Error, TVariables>({
        mutationFn: (variables: TVariables) => {
            // apiRequest can return TData | Blob | string; assert Promise<TData> here
            // and ensure body is a FormData or plain object for the request
            const body = variables as unknown as FormData | object;
            return apiRequest<TData>({
                service,
                endpoint,
                useGateway,
                method,
                body,
            }) as Promise<TData>;
        },
        ...opts,
    });
}
