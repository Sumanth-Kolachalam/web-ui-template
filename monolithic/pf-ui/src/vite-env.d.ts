/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PF_USER_SERVICE_URL: string;
    readonly VITE_PF_MDMS_SERVICE_URL: string;
    readonly VITE_PF_GATEWAY_SERVICE_URL: string;
    readonly VITE_PF_WF_SERVICE_URL: string;
    readonly VITE_PF_FILESTORE_SERVICE_URL: string;
    readonly VITE_PF_LOCALIZATION_SERVICE_URL: string;
    readonly VITE_PF_REPORTS_SERVICE_URL: string;
    readonly VITE_PF_DASHBOARD_SERVICE_URL: string;
    readonly VITE_PF_USER_SERVICE_CONTEXT_URL: string;
    readonly VITE_PF_MDMS_SERVICE_CONTEXT_URL: string;
    readonly VITE_PF_WF_SERVICE_CONTEXT_URL: string;
    readonly VITE_PF_FILESTORE_SERVICE_CONTEXT_URL: string;
    readonly VITE_PF_LOCALIZATION_SERVICE_CONTEXT_URL: string;
    readonly VITE_PF_REPORTS_SERVICE_CONTEXT_URL: string;
    readonly VITE_PF_DASHBOARD_SERVICE_CONTEXT_URL: string;
    readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
