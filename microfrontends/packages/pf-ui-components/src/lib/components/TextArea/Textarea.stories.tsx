import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`Textarea\` component is used for multi-line user input.  
It supports focus ring, disabled state, and accessibility attributes.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Write your message here...',
    rows: 4,
  },
  render: (args) => {
    return (
      <div className="max-w-md space-y-2">
        <label htmlFor="feedback" className="text-sm font-medium">
          Feedback
        </label>
        <Textarea id="feedback" {...args} />
      </div>
    );
  },
};
