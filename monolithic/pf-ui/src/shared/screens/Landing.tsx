import { useMemo } from 'react';
import { Layout } from './Layout';
import { Outlet, useLoaderData } from 'react-router';
import { LandingProvider } from '@shared/components';
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
                <Outlet />
            </Layout>
        </LandingProvider>
    );
};

export { Landing };
