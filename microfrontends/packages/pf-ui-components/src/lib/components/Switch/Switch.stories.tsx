import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The \`Switch\` component is a toggleable UI element built with Radix.  
It supports accessible keyboard interactions and is fully stylable.

Usage:

\`\`\`tsx
<Switch />
\`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <Switch id="feature-switch" checked={checked} onCheckedChange={setChecked} />;
  },
};
