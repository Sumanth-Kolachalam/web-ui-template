import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './Collapsible';
import { Button } from '@/lib/components/Button/Button';

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Collapsible',
  component: Collapsible,
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger>
          <Button variant={'link'}>{open ? 'Hide details' : 'Show details'}</Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <p>This is some collapsible content. It appears when expanded.</p>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};
