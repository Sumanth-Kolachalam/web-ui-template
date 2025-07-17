import type { Meta, StoryObj } from '@storybook/react-vite';

import { Popover, PopoverTrigger, PopoverContent } from './Popover';
import { Button } from '@/lib/components/Button/Button';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: `
The \`Popover\` component is a floating UI element used to display content in a popover container triggered by user interaction.

### Usage

\`\`\`tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>This is the content of the popover.</p>
  </PopoverContent>
</Popover>
\`\`\`

### Subcomponents

- \`PopoverTrigger\`: Wraps the trigger element, usually a button.
- \`PopoverContent\`: The content displayed in the popover.
- \`PopoverAnchor\` (optional): For custom anchoring.

### Features
- Accessible (keyboard + screen reader)
- Fully customizable
- Includes animation support
      `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Popover expects `PopoverTrigger` and `PopoverContent` as children.',
      control: { type: null },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p className="text-sm">This is the content of the popover.</p>
        </PopoverContent>
      </Popover>
    );
  },
};
