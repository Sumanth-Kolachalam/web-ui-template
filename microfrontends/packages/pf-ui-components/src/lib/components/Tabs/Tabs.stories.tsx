import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Tabs allow switching between different views or sections within the same page.
Built with Radix UI primitives, styled for a consistent UX.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    return (
      <Tabs defaultValue="account" className="w-full max-w-md">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="p-4 border rounded-md mt-2">
            <p className="text-sm">Change your account settings here.</p>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="p-4 border rounded-md mt-2">
            <p className="text-sm">Update your password settings here.</p>
          </div>
        </TabsContent>
      </Tabs>
    );
  },
};
