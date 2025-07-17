import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuRadioGroup,
} from './ContextMenu';

const meta: Meta<typeof ContextMenu> = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: () => {
    const [showLineNumbers, setShowLineNumbers] = React.useState(true);
    const [wordWrap, setWordWrap] = React.useState(false);
    const [alignment, setAlignment] = React.useState('left');

    return (
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <div className="p-8 border rounded-md bg-muted text-muted-foreground w-max cursor-context-menu">
            Right-click here
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel>Editor</ContextMenuLabel>
          <ContextMenuCheckboxItem checked={showLineNumbers} onCheckedChange={setShowLineNumbers}>
            Show Line Numbers
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={wordWrap} onCheckedChange={setWordWrap}>
            Word Wrap
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>Alignment</ContextMenuLabel>
          <ContextMenuRadioGroup value={alignment} onValueChange={setAlignment}>
            <ContextMenuRadioItem value="left">Left</ContextMenuRadioItem>
            <ContextMenuRadioItem value="center">Center</ContextMenuRadioItem>
            <ContextMenuRadioItem value="right">Right</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};
