import { createContext } from 'react';
import type {
    AuthContextValue,
    LandingContextType,
    LayoutContextProps,
    MenuContextProps,
    TranslationContextValue,
} from '@shared/types';

const MenuContext = createContext<MenuContextProps | null>(null);

const LayoutContext = createContext<LayoutContextProps | null>(null);

const TranslationContext = createContext<TranslationContextValue | null>(null);

const AuthContext = createContext<AuthContextValue | null>(null);

const LandingContext = createContext<LandingContextType | null>(null);

export { MenuContext, LayoutContext, TranslationContext, AuthContext, LandingContext };
