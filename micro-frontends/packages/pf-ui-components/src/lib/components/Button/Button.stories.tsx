import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The visual style of the button.',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button.',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a child component (e.g., to pass props to an underlying link).',
    },
    // Allows editing the button's text content directly in Storybook controls
    children: {
      control: 'text',
      description: 'The content displayed inside the button.',
    },
    // Registers an action to be logged when the button is clicked
    onClick: {
      action: 'clicked',
      description: 'Callback fired when the button is clicked.',
    },
    // You can add more argTypes for other props like `disabled`, `className`, etc.
    disabled: {
      control: 'boolean',
      description: 'Disables user interaction with the button.',
    },
  },
  tags: ['autodocs'], // Enables auto-generated documentation page for this component
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Learn More',
    variant: 'outline',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Action',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'View Details',
    variant: 'link',
  },
};
