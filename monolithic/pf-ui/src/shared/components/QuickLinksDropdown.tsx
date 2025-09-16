import { useState, useCallback } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { QUICK_LINKS } from '@shared/utils';
import { useNavigate } from 'react-router';

const QuickLinksDropdown = () => {
    const navigate = useNavigate();
    const [selectedLink, setSelectedLink] = useState<string>('');

    const handleChange = useCallback(
        (e: { value: string }) => {
            setSelectedLink(e.value);
            const selected = QUICK_LINKS.find((link) => {
                return link.value === e.value;
            });
            if (selected?.url) {
                void navigate(selected.url);
            }
        },
        [navigate],
    );

    return (
        <Dropdown
            value={selectedLink}
            options={QUICK_LINKS}
            onChange={handleChange}
            optionLabel="label"
            placeholder="Quick Links"
            className="w-12rem"
        />
    );
};

export { QuickLinksDropdown };
