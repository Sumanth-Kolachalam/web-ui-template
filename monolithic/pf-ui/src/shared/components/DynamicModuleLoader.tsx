import { MODULES } from '@shared/utils';
import { lazy, Suspense, type LazyExoticComponent, type ComponentType } from 'react';
import { useParams } from 'react-router';
import { SuspenseFallback } from './SuspenseFallBack';
import { NotFoundPage } from '@shared/screens';

// Lazy cache to avoid recreating lazy components on every render
const lazyCache: Record<string, LazyExoticComponent<ComponentType>> = {};

function getComponentFromModule(module: string) {
    // Return cached lazy component if available
    if (lazyCache[module]) return lazyCache[module];

    const importer = MODULES[module];
    if (!importer) {
        console.warn(`Module not found in modules map: "${module}"`);
        return NotFoundPage;
    }

    // Wrap the dynamic import in React.lazy with error handling
    const lazyComp = lazy(async () => {
        try {
            const mod = await importer();
            return mod;
        } catch (err) {
            console.error(`Error loading module "${module}":`, err);
            // Return fallback component so React.lazy doesn’t break
            return { default: NotFoundPage };
        }
    });

    lazyCache[module] = lazyComp;
    return lazyComp;
}

function DynamicModuleLoader() {
    const { module } = useParams();

    if (!module) return null;

    const Component = getComponentFromModule(module);

    if (!Component) return <NotFoundPage />;

    return (
        <Suspense fallback={<SuspenseFallback />}>
            <Component />
        </Suspense>
    );
}

export { DynamicModuleLoader };
