import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A range slider component built with Radix UI.
Supports both single and multi-thumb (range) sliders.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
  },
};
