import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
  The **Dialog** component provides a modal dialog interface for user interactions such as confirmations, form inputs, or other focused tasks.
  
  ### Features
  - Fully accessible and keyboard-navigable.
  - Includes structured slots: \`DialogHeader\`, \`DialogTitle\`, \`DialogDescription\`, \`DialogFooter\`.
  - Uses \`DialogTrigger\` to open and \`DialogClose\` to close.
  - Customizable via Tailwind CSS and supports portal-based rendering.

### Example Use Cases
  - Delete confirmations
  - Form modals
  - Notifications or onboarding steps
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    return (
      <Dialog>
        <DialogTrigger>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Open Dialog</button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>This action cannot be undone.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <button className="px-4 py-2 border rounded-md">Cancel</button>
            </DialogClose>
            <button className="px-4 py-2 bg-red-600 text-white rounded-md">Confirm</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};
