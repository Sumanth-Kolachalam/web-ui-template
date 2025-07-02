import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { RadioGroup, RadioGroupItem } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A controlled or uncontrolled group of selectable radio buttons. 
Built with Radix UI primitives and styled for consistency.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState('option-1');

    return (
      <RadioGroup value={value} onValueChange={setValue} className="flex flex-col gap-2">
        <label className="flex items-center gap-2" htmlFor="option-1">
          <RadioGroupItem value="option-1" id="option-1" />
          Option 1
        </label>
        <label className="flex items-center gap-2" htmlFor="option-2">
          <RadioGroupItem value="option-2" id="option-2" />
          Option 2
        </label>
        <label className="flex items-center gap-2" htmlFor="option-3">
          <RadioGroupItem value="option-3" id="option-3" />
          Option 3
        </label>
      </RadioGroup>
    );
  },
};
