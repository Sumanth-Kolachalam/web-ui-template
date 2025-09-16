interface LandingContextType {
    vmenu: VMenuType[];
}

interface Props {
    children: React.ReactNode;
    vmenu: VMenuType[];
}

interface VMenuType {
    path: string;
    displayName: string;
    icon?: string;
    link?: string;
    apiEndpoint?: string;
    label: string;
}

type Resource = {
    id: string;
    altName: string;
    displayName: string;
    type: string;
    path: string;
    orderNo: string;
    label: string;
    link?: string;
    icon?: string;
    enabled?: boolean;
    apiEndpoint?: string;
} & Record<string, unknown>;

interface ResourceItem {
    uuid: string;
    resource?: Resource;
}

export { LandingContextType, Props, VMenuType, ResourceItem };
