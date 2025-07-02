import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Tooltip, TooltipTrigger, TooltipContent } from './Tooltip';

import { Button } from '@/lib/components/Button/Button'; // Adjust the path as needed

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The \`Tooltip\` component displays contextual information on hover or focus.  
It's built using Radix UI primitives and supports delay, side offsets, and animation.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>Tooltip content goes here</TooltipContent>
      </Tooltip>
    );
  },
};
