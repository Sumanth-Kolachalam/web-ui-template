import React, { useEffect, useMemo } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { selectedLanguage } from '@shared/store';
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '@shared/utils';
import type { ProviderProps } from '@shared/types';
import { TranslationContext } from '@shared/utils';

const TranslationProvider: React.FC<ProviderProps> = ({ children, module, translationsAtom }) => {
    const lang = useAtomValue(selectedLanguage);
    const setTranslations = useSetAtom(translationsAtom);

    const query = useQuery({
        queryKey: ['translations', lang, module],
        queryFn: async () => {
            return apiRequest({
                method: 'POST',
                service: 'localization',
                endpoint: '/_searchV2',
                body: { module, locale: lang },
            }) as Promise<Record<string, string>>;
        },
        staleTime: Infinity,
        gcTime: Infinity,
    });

    useEffect(() => {
        if (query.data) {
            setTranslations((prev: Record<string, string>) => {
                return { ...prev, ...query.data };
            });
        }
    }, [query.data, setTranslations]);

    const contextValue = useMemo(() => {
        return {
            module,
            translationsAtom,
        };
    }, [module, translationsAtom]);

    return (
        <TranslationContext.Provider value={contextValue}>{children}</TranslationContext.Provider>
    );
};

export { TranslationProvider };
