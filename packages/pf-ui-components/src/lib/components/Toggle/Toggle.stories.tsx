import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['default', 'outline'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'default', 'lg'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
\`Toggle\` is a switch-like button that toggles between \`on\` and \`off\` states.

Built on Radix UI's \`Toggle\`, it supports visual variants like \`outline\`, and sizes like \`sm\`, \`default\`, \`lg\`.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    'aria-label': 'Toggle feature',
  },
  render: (args) => {
    const [on, setOn] = React.useState(false);

    return (
      <div className="flex flex-col gap-2 items-start">
        <Toggle {...args} pressed={on} onPressedChange={setOn}>
          {on ? 'On' : 'Off'}
        </Toggle>
        <span className="text-sm text-muted-foreground">
          Toggle state: <strong>{on ? 'Enabled' : 'Disabled'}</strong>
        </span>
      </div>
    );
  },
};
