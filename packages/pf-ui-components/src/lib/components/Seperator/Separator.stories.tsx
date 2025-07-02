import type { Meta, StoryObj } from '@storybook/react-vite';

import { Separator } from './Separator';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    decorative: true,
  },
  render: (args) => {
    return (
      <div className="w-full space-y-4">
        <p>Above the separator</p>
        <Separator {...args} />
        <p>Below the separator</p>
      </div>
    );
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    decorative: false,
  },
  render: (args) => {
    return (
      <div className="flex h-32 items-center space-x-4">
        <span>Left</span>
        <Separator {...args} className="h-full" />
        <span>Right</span>
      </div>
    );
  },
};
