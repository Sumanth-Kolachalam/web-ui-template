import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Avatar, AvatarImage, AvatarFallback } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`Avatar\` component is used to display a user profile picture.  
It can fall back to initials or a default UI when the image fails to load.

**Subcomponents:**
- \`AvatarImage\`: Renders the image inside the avatar.
- \`AvatarFallback\`: Provides a fallback when the image is not available.
        `,
      },
    },
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => {
    return (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="ShadCN" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
    );
  },
};
