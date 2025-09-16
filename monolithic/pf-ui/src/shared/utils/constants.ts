import type { ComponentType } from 'react';

const STORAGE_KEYS = {
    AUTH_TOKEN: 'authToken',
    USER_DETAILS: 'userDetails',
    ORG_ID: 'selectedOrgId',
    ROLE_IDS: 'selectedRoleIds',
};

const LOCALISATION_MODULES = {
    COMMON: 'COMMON',
};

// has to match with folder names inside the modules folder
const AVAILABLE_MODULES = {
    admin: 'admin',
    dashboard: 'dashboard',
    irs: 'irs',
    reports: 'reports',
};

const MODULES: Record<string, () => Promise<{ default: ComponentType }>> = {
    [AVAILABLE_MODULES.dashboard]: () => {
        return import('../../modules/dashboard/routes/Router.tsx');
    },
    [AVAILABLE_MODULES.reports]: () => {
        return import('../../modules/reports/routes/Router.tsx');
    },
};

const QUICK_LINKS: { label: string; value: string; url: string }[] = [
    {
        label: 'Sample Form',
        value: 'sample-form',
        url: '/web/sample-form',
    },
];

export { STORAGE_KEYS, LOCALISATION_MODULES, QUICK_LINKS, AVAILABLE_MODULES, MODULES };
