import { Suspense, useMemo } from 'react';
import { Layout } from './Layout';
import { Outlet, useLoaderData } from 'react-router';
import { LandingProvider, SuspenseFallback } from '@shared/components';
import type { ResourceItem, VMenuType } from '@shared/types';

const Landing = () => {
    const { data } = useLoaderData<{ data: ResourceItem[] }>();

    const vmenu = useMemo(() => {
        return data
            .filter((item) => {
                return item.resource?.type === 'VMENU';
            })
            .map((item) => {
                return item.resource as VMenuType;
            });
    }, [data]);

    return (
        <LandingProvider vmenu={vmenu}>
            <Layout>
                <Suspense fallback={<SuspenseFallback />}>
                    <Outlet />
                </Suspense>
            </Layout>
        </LandingProvider>
    );
};

export { Landing };
