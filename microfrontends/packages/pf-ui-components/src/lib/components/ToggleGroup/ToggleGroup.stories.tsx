import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { ToggleGroup, ToggleGroupItem } from './ToggleGroup';

const meta: Meta<typeof ToggleGroup> = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
\`ToggleGroup\` is a group of related toggle buttons that can behave like a segmented control.  
Supports single or multiple selection and variants for styling.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState<string>('left');

    const handleValueChange = React.useCallback((val: string) => {
      if (val) setValue(val);
    }, []);

    return (
      <div className="flex flex-col items-start gap-2">
        <ToggleGroup
          type="single"
          value={value}
          onValueChange={handleValueChange}
          variant="outline"
          size="default"
        >
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
        </ToggleGroup>
        <span className="text-sm text-muted-foreground">
          Selected: <strong>{value}</strong>
        </span>
      </div>
    );
  },
};
