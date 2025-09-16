import React, {
    useCallback,
    useEffect,
    useMemo,
    useState,
    type ChangeEvent,
    type FormEvent,
} from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { useNavigate } from 'react-router';
import { LanguageSwitcher } from '@shared/components';
import { useSafeContext, useT } from '@shared/hooks';
import { QuickLinksDropdown } from '@shared/components';
import { Skeleton } from 'primereact/skeleton';
import { TabView, TabPanel, type TabViewTabChangeEvent } from 'primereact/tabview';
import type { LoginFormState, OrgOption } from '@shared/types';
import { AuthContext } from '@shared/utils';

function handleInputChange(
    e: ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<LoginFormState>>,
) {
    const { name, value } = e.target;
    setState((prev) => {
        return {
            ...prev,
            [name]: value,
        };
    });
}

function Login() {
    const navigate = useNavigate();
    const { login, isLoggingIn, loginError, isLoginSuccessfull } = useSafeContext(AuthContext);
    const { t } = useT();

    const [form, setForm] = useState<LoginFormState>({
        username: '',
        password: '',
        selectedOrgName: 'PF_ORG',
    });

    const orgOptions: OrgOption[] = useMemo(() => {
        return [
            { label: 'PF Organization', value: 'PF_ORG' },
            { label: 'Government', value: 'GOVT' },
            { label: 'Public', value: 'PUBLIC' },
        ];
    }, []);

    const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        handleInputChange(e, setForm);
    }, []);

    const onOrgChange = useCallback(
        (e: TabViewTabChangeEvent) => {
            setForm((prev) => {
                return {
                    ...prev,
                    selectedOrgName: orgOptions[e.index].value,
                };
            });
        },
        [orgOptions],
    );

    const onFormSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            login(form);
        },
        [form, login],
    );

    useEffect(() => {
        if (isLoginSuccessfull) {
            void navigate('/web/landing');
        }
    }, [isLoginSuccessfull, navigate]);

    return (
        <div className="flex flex-column min-h-screen bg-gray-100 p-4 relative">
            {/* Top bar */}
            <div className="flex justify-content-end align-items-center gap-3 pr-4 absolute right-0">
                <QuickLinksDropdown />
                <LanguageSwitcher />
            </div>

            <div className="flex flex-1 flex-column md:flex-row">
                <div
                    id="hero-section"
                    className="flex justify-content-center align-items-center w-7"
                >
                    <span className="text-3xl font-bold text-center md:text-7xl">
                        Economic Census
                    </span>
                </div>

                <Divider layout="vertical" />

                <div
                    id="auth-panel"
                    className="flex justify-content-center align-items-center p-4 w-5"
                >
                    <div className="card w-9">
                        <h2 className="text-center text-3xl my-3 w-full">
                            {t('LOGIN', { fallbackText: 'Login' })}
                        </h2>

                        <TabView
                            activeIndex={orgOptions.findIndex((o) => {
                                return o.value === form.selectedOrgName;
                            })}
                            onTabChange={onOrgChange}
                            className="mb-3"
                        >
                            {orgOptions.map((org) => {
                                return (
                                    <TabPanel key={org.value} header={org.label}>
                                        <form
                                            className="formgrid grid gap-2"
                                            onSubmit={onFormSubmit}
                                        >
                                            <div className="field col-12">
                                                <label htmlFor="username">
                                                    {t('USERNAME', { fallbackText: 'Username' })}
                                                </label>
                                                <InputText
                                                    id="username"
                                                    name="username"
                                                    value={form.username}
                                                    onChange={onInputChange}
                                                    className="w-full"
                                                    autoComplete="username"
                                                />
                                            </div>

                                            <div className="field col-12">
                                                <label htmlFor="password">
                                                    {t('PASSWORD', { fallbackText: 'Password' })}
                                                </label>
                                                <Password
                                                    id="password"
                                                    name="password"
                                                    value={form.password}
                                                    onChange={onInputChange}
                                                    className="w-full"
                                                    panelClassName="w-full"
                                                    inputClassName="w-full"
                                                    toggleMask
                                                    feedback={false}
                                                    autoComplete="current-password"
                                                />
                                            </div>

                                            <div className="field col-12 flex flex-wrap justify-content-between align-items-center">
                                                <Skeleton width="12.5rem" height="4.5rem" />
                                                <Button
                                                    icon="pi pi-refresh"
                                                    rounded
                                                    text
                                                    aria-label="Filter"
                                                />
                                                <div className="flex flex-column gap-2">
                                                    <label htmlFor="captcha">Enter Captcha</label>
                                                    <InputText
                                                        id="captcha"
                                                        placeholder="Enter the characters"
                                                    />
                                                </div>
                                            </div>

                                            {loginError && (
                                                <p className="text-red-500 text-sm mt-2 w-full text-center">
                                                    {loginError}
                                                </p>
                                            )}

                                            <Button
                                                label={
                                                    isLoggingIn
                                                        ? t('LOGGING_IN', {
                                                              fallbackText: 'Logging in...',
                                                          })
                                                        : t('LOGIN', { fallbackText: 'Login' })
                                                }
                                                type="submit"
                                                className="w-full"
                                                disabled={isLoggingIn}
                                            />
                                        </form>
                                    </TabPanel>
                                );
                            })}
                        </TabView>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Login };
