import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { apiRequest } from '@shared/utils';
import type { ReadApiParams } from '@shared/types';

export function useReadApi<TQueryFnData = unknown>({
    service,
    endpoint,
    method = 'GET',
    body,
    useGateway = true,
}: ReadApiParams<TQueryFnData>): UseQueryResult<TQueryFnData, Error> {
    return useQuery<TQueryFnData, Error, TQueryFnData, [string, string]>({
        queryKey: [service, endpoint],
        queryFn: () =>
            {return apiRequest<TQueryFnData>({
                service,
                endpoint,
                useGateway,
                method,
                body,
            }) as Promise<TQueryFnData>},
    });
}
