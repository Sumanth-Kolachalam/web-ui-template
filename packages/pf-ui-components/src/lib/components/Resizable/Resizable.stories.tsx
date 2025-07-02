import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './Resizable';

const meta: Meta<typeof ResizablePanelGroup> = {
  title: 'Components/Resizable Panel',
  component: ResizablePanelGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`ResizablePanelGroup\` component is a flexible container that allows users to resize adjacent panels horizontally or vertically.  
Built on top of \`react-resizable-panels\`, it supports:

- Horizontal or vertical resizing
- Customizable handle with icon (via \`withHandle\`)
- Accessible keyboard and mouse interaction
- Dynamic sizing with \`defaultSize\`, \`minSize\`, and \`maxSize\`

### Usage

Wrap your resizable layout in:

- \`<ResizablePanelGroup>\` — root container with \`direction="horizontal"\` or \`"vertical"\`
- \`<ResizablePanel>\` — each individual resizable region (must be inside group)
- \`<ResizableHandle>\` — adds a draggable separator between two panels
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ResizablePanelGroup>;

// Horizontal layout
export const Horizontal: Story = {
  render: () => {
    return (
      <div className="h-[300px] w-full border rounded-md overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={50} className="bg-muted p-4">
            <p>Left Panel</p>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50} className="bg-muted/50 p-4">
            <p>Right Panel</p>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    );
  },
};

// Vertical layout
export const Vertical: Story = {
  render: () => {
    return (
      <div className="h-[400px] w-full border rounded-md overflow-hidden">
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50} className="bg-muted p-4">
            <p>Top Panel</p>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50} className="bg-muted/50 p-4">
            <p>Bottom Panel</p>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    );
  },
};
