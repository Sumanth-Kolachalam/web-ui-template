import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './Input';

const meta = {
  component: Input,
  title: 'Components/Input',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    placeholder: 'Enter text here..',
    type: 'text',
  },
};

export const NumberInput: Story = {
  args: {
    placeholder: 'Enter number here..',
    type: 'number',
  },
};
