import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Accessible checkbox built with Radix UI and styled with Tailwind.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(true);

    const handleCheckedChange = React.useCallback((value: boolean | 'indeterminate') => {
      setChecked(value === true);
    }, []);

    return <Checkbox checked={checked} onCheckedChange={handleCheckedChange} />;
  },
};
