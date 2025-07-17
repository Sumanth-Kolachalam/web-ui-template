import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Alert, AlertTitle, AlertDescription } from './Alert';
import { Info } from 'lucide-react'; // Example icon

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'destructive', 'success', 'warning', 'info'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
\`Alert\` is a feedback component used to display important messages or statuses.  
It supports a title, description, and an optional icon.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => {
    return (
      <Alert {...args}>
        <Info className="mt-0.5" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          This is an alert message used to notify users of important information.
        </AlertDescription>
      </Alert>
    );
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: (args) => {
    return (
      <Alert {...args}>
        <Info className="mt-0.5" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          This is an alert message used to notify users of important information.
        </AlertDescription>
      </Alert>
    );
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => {
    return (
      <Alert {...args}>
        <Info className="mt-0.5" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          This is an alert message used to notify users of important information.
        </AlertDescription>
      </Alert>
    );
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => {
    return (
      <Alert {...args}>
        <Info className="mt-0.5" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          This is an alert message used to notify users of important information.
        </AlertDescription>
      </Alert>
    );
  },
};

export const Information: Story = {
  args: {
    variant: 'info',
  },
  render: (args) => {
    return (
      <Alert {...args}>
        <Info className="mt-0.5" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          This is an alert message used to notify users of important information.
        </AlertDescription>
      </Alert>
    );
  },
};
