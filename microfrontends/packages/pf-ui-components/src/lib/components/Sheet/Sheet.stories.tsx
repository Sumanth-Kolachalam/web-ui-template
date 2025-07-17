import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from './Sheet';

import { Button } from '@/lib/components/Button/Button'; // adjust the path if needed

const meta: Meta<typeof Sheet> = {
  title: 'Components/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The \`Sheet\` component is a modal drawer that slides in from any edge. 
It uses Radix UI's \`Dialog\` under the hood and supports headers, footers, and smooth animations.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open Sheet</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>
              This is a contextual side panel useful for navigation or secondary workflows.
            </SheetDescription>
          </SheetHeader>
          <div className="flex-1 p-4">
            <p className="text-sm text-muted-foreground">Here you can place your main content.</p>
          </div>
          <SheetFooter>
            <Button>Confirm</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};
