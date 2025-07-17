import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from './BreadCrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component: `
The \`Breadcrumb\` component is used to display the navigation path of a page, typically at the top of a page or section.

### Composition
The breadcrumb is built from several composable subcomponents:
- \`Breadcrumb\`: The root container (typically a \`<nav>\`)
- \`BreadcrumbList\`: An \`<ol>\` wrapper that holds breadcrumb items
- \`BreadcrumbItem\`: A wrapper for individual links or text
- \`BreadcrumbLink\`: A clickable navigation link
- \`BreadcrumbPage\`: A non-clickable element for the current page
- \`BreadcrumbSeparator\`: The divider (e.g. slash or chevron) between items
- \`BreadcrumbEllipsis\`: An ellipsis (•••) for collapsed breadcrumb items, useful for overflow scenarios

### Accessibility
- Uses \`aria-current="page"\` for the current item.
- \`BreadcrumbEllipsis\` includes an accessible label for screen readers.
        `,
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: () => {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbEllipsis />

          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Product</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  },
};
