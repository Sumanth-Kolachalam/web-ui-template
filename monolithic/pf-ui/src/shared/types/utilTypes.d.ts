import { PrimitiveAtom } from 'jotai';

type ServiceKey =
    | 'user'
    | 'mdms'
    | 'workflow'
    | 'fileStore'
    | 'localization'
    | 'dashboard'
    | 'reports'
    | 'gateway';

type TranslationContextValue = {
    module: string | undefined;
    translationsAtom: PrimitiveAtom<Record<string, string>>;
};

type ProviderProps = {
    children: ReactNode;
    module: string | undefined;
    translationsAtom: PrimitiveAtom<Record<string, string>>;
};

// ------------------ screens ---------------------------

interface ErrorPageProps {
    error: Error;
    resetErrorBoundary?: () => void;
}

type SuspenseFallbackProps = {
    size?: string; // e.g. "2rem", "3rem", "40px"
};

//--------------------hooks-----------------------------

type ReadApiParams<TQueryFnData> = {
    service: ServiceKey;
    endpoint: string;
    useGateway?: boolean;
    method?: 'GET' | 'POST';
    body?: object | FormData;
} & Omit<
    UseQueryOptions<TQueryFnData, Error, TQueryFnData, [string, string]>,
    'queryKey' | 'queryFn'
>;

type WriteApiParams<TData = unknown, TVariables = unknown> = {
    service: ServiceKey;
    endpoint: string;
    method?: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    useGateway?: boolean;
    options?: UseMutationOptions<TData, Error, TVariables>;
};

export {
    ServiceKey,
    TranslationContextValue,
    ProviderProps,
    ErrorPageProps,
    SuspenseFallbackProps,
    ReadApiParams,
    WriteApiParams,
};
