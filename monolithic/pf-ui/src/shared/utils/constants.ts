const STORAGE_KEYS = {
    AUTH_TOKEN: 'authToken',
    USER_DETAILS: 'userDetails',
    ORG_ID: 'selectedOrgId',
    ROLE_IDS: 'selectedRoleIds',
};

const MODULES = {
    COMMON: 'COMMON',
};

const QUICK_LINKS: { label: string; value: string; url: string }[] = [
    {
        label: 'Sample Form',
        value: 'sample-form',
        url: '/web/sample-form',
    },
];

export { STORAGE_KEYS, MODULES, QUICK_LINKS };
