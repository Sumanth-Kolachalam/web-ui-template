import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { ScrollArea, ScrollBar } from './ScrollArea';

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A scrollable area component that wraps overflowing content and provides custom scrollbars (vertical and horizontal).  
        `,
      },
    },
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Vertical: Story = {
  name: 'Vertical Scroll',
  render: () => {
    return (
      <div className="h-64 w-64 rounded-lg border">
        <ScrollArea className="h-full w-full p-2">
          <div className="space-y-2">
            {Array.from({ length: 30 }).map((_, i) => {
              return (
                <div key={i} className="bg-muted text-foreground rounded px-2 py-1 text-sm">
                  Item {i + 1}
                </div>
              );
            })}
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>
    );
  },
};

export const Horizontal: Story = {
  name: 'Horizontal Scroll',
  render: () => {
    return (
      <div className="w-full max-w-xl rounded-lg border overflow-hidden">
        <ScrollArea className="w-full whitespace-nowrap p-2 pb-3">
          <div className="inline-flex gap-2">
            {Array.from({ length: 20 }).map((_, i) => {
              return (
                <div
                  key={i}
                  className="bg-muted text-foreground rounded min-w-[120px] px-2 py-1 text-sm text-center"
                >
                  Item {i + 1}
                </div>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    );
  },
};
