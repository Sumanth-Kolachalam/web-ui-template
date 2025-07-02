import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`Progress\` component visually indicates a task's completion percentage.
Built with Radix UI primitives and styled using Tailwind CSS.

\`\`\`tsx
<Progress value={60} />
\`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 60, // 60% progress
    className: 'max-w-md',
  },
  render: (args) => {
    return (
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Uploading... {args.value}%</p>
        <Progress {...args} />
      </div>
    );
  },
};
