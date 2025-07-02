import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
  CommandEmpty,
  CommandSeparator,
  CommandShortcut,
} from './Command';

const meta: Meta<typeof CommandDialog> = {
  title: 'Components/Command',
  component: CommandDialog,
};

export default meta;

type Story = StoryObj<typeof CommandDialog>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);

    return (
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Suggestions">
            <CommandItem>Profile</CommandItem>
            <CommandItem>
              Settings
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Navigation">
            <CommandItem>Dashboard</CommandItem>
            <CommandItem>Projects</CommandItem>
            <CommandItem>Team</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    );
  },
};
