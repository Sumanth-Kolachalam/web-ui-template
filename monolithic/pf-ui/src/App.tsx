import { PrimeReactProvider } from 'primereact/api';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@shared/utils';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from '@shared/screens';
import { AuthProvider, LayoutProvider, TranslationProvider } from '@shared/components';
import { MODULES } from '@shared/utils';
import { translationsAtom } from '@shared/store';
import { Suspense } from 'react';
import { SuspenseFallback } from '@shared/components';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '@shared/styles/layout.scss';
import './App.css';
import { RouterProvider } from 'react-router';
import { Router } from '@shared/routes/Router';

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ErrorBoundary FallbackComponent={ErrorPage}>
                <PrimeReactProvider>
                    <AuthProvider>
                        <LayoutProvider>
                            <TranslationProvider
                                module={MODULES.COMMON}
                                translationsAtom={translationsAtom}
                            >
                                <Suspense fallback={<SuspenseFallback />}>
                                    <RouterProvider router={Router} />
                                </Suspense>
                            </TranslationProvider>
                        </LayoutProvider>
                    </AuthProvider>
                </PrimeReactProvider>
                {process.env.NODE_ENV !== 'production' && (
                    <ReactQueryDevtools initialIsOpen={false} />
                )}
            </ErrorBoundary>
        </QueryClientProvider>
    );
}

export default App;
