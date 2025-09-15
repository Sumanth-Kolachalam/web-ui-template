import { useContext, type Context } from 'react';

export function useSafeContext<T>(contextObj : Context<T | null>) {
    const ctx = useContext(contextObj);
    if (!ctx) throw new Error('useT must be used inside a TranslationProvider');
    return ctx;
}
