import { useAtomValue } from 'jotai';
import { selectedLanguage } from '../store';
import { TranslationContext } from '@shared/utils';
import { useSafeContext } from './useSafeContext';
import React from 'react';

// Options for translation lookup
interface TranslationOptions<T extends string = string> {
    fallbackText?: string;
    label?: T; // field name in array mapping
    code?: string; // key for item lookup
}

// Shape of an object inside an array key
// Reuse Record<string, unknown> for translatable item shapes

export function useT() {
    const { module, translationsAtom } = useSafeContext(TranslationContext);
    const translations = useAtomValue(translationsAtom) as Record<string, string> | undefined;
    const lang = useAtomValue(selectedLanguage);

    const t = React.useMemo(() => {
        function translate(key: string, options?: TranslationOptions): string;
        function translate<T extends Record<string, unknown>>(
            key: T[],
            options: Required<Pick<TranslationOptions, 'label' | 'code'>>,
        ): T[];
        function translate<T extends Record<string, unknown>>(
            key: string | T[],
            options: TranslationOptions = {},
        ): string | T[] {
            const { fallbackText, label, code } = options;

            if (Array.isArray(key)) {
                if (label && code) {
                    return key.map((item) => {
                        const lookupKey = String(item[code]);
                        const translated = translations?.[`${module}.${lang}.${lookupKey}`];
                        return {
                            ...item,
                            [label]: translated ?? (item[label] as string | undefined) ?? '',
                        } as T;
                    });
                }
                return key;
            }
            const lookup = `${module}.${lang}.${String(key)}`;
            return translations?.[lookup] ?? fallbackText ?? key;
        }

        return translate;
    }, [translations, module, lang]);

    return { t };
}
