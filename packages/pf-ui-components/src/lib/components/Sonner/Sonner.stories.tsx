import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { Toaster } from './Sonner';
import { toast } from 'sonner';
import { Button } from '@/lib/components/Button/Button'; // or any button component

const meta = {
  title: 'Components/Toaster',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof Toaster>;

const handleShowToast = () => {
  toast.success('Toast triggered!');
};

export const Default: Story = {
  render: () => {
    return (
      <>
        <Toaster />
        <div className="p-4">
          <Button onClick={handleShowToast}>Show Toast</Button>
        </div>
      </>
    );
  },
};
