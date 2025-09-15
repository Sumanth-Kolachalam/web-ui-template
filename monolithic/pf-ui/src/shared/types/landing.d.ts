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

export { LandingContextType, Props, VMenuType };
