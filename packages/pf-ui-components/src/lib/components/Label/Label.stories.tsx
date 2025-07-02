import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Label } from './Label';

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Components/Label',
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email address</Label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className="border px-2 py-1 rounded-md w-64"
        />
      </div>
    );
  },
};
