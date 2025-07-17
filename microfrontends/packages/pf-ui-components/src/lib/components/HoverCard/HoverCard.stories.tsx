import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { HoverCard, HoverCardTrigger, HoverCardContent } from './HoverCard';

import { Button } from '@/lib/components/Button/Button'; // Adjust if needed

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The \`HoverCard\` displays floating content when the user hovers over a trigger.  
It is useful for showing previews, metadata, or inline info popups.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="text-sm leading-snug">
            This is a preview box shown on hover. You can add anything here, like user details,
            media, or descriptions.
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  },
};
