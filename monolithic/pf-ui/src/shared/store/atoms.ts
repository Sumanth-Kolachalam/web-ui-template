import { atom } from 'jotai';

const availableLanguages = atom([
    { locale: 'EN_IN', displayName: 'English' },
    { locale: 'HI_IN', displayName: 'हिन्दी' },
]);

const STORAGE_KEY = 'selectedLanguage';

const selectedLanguage = atom(
    // Initialize from localStorage or default to 'EN_IN'
    typeof window !== 'undefined' ? (localStorage.getItem(STORAGE_KEY) ?? 'EN_IN') : 'EN_IN',
);

const setSelectedLanguage = atom(null, (_get, set, lang: string) => {
    set(selectedLanguage, lang);
    localStorage.setItem(STORAGE_KEY, lang);
});

const translationsAtom = atom<Record<string, string>>({});

export { availableLanguages, setSelectedLanguage, translationsAtom, selectedLanguage };
