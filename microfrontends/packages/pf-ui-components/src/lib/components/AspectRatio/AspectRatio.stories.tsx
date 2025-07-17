import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { AspectRatio } from './AspectRatio';

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`AspectRatio\` component maintains a fixed width-to-height ratio for media and layout elements.  
It’s useful for consistent image, video, or container shapes across breakpoints.

\`\`\`tsx
<AspectRatio ratio={16 / 9}>
  <img src="..." alt="..." className="h-full w-full object-cover" />
</AspectRatio>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => {
    return (
      <AspectRatio {...args}>
        <div className="bg-muted flex items-center justify-center h-full w-full rounded-md text-muted-foreground">
          16:9 Content Area
        </div>
      </AspectRatio>
    );
  },
};
