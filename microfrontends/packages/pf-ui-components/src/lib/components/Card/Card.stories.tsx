import type { Meta, StoryObj } from '@storybook/react-vite';
import { MoreVertical } from 'lucide-react';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from './Card';

import { Button } from '@/lib/components/Button/Button'; // Adjust the path if needed

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`Card\` component is a flexible container with optional sections for header, content, footer, and actions.
\`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>Welcome to your new dashboard!</CardDescription>
          <CardAction>
            <Button size="icon" variant="ghost">
              <MoreVertical className="size-4" />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This is a simple card layout using custom components for structure and style. You can
            build forms, content blocks, or dashboards using these primitives.
          </p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Continue</Button>
        </CardFooter>
      </Card>
    );
  },
};

export const WithImage: StoryObj = {
  parameters: {
    docs: {
      description: {
        component: 'You can use the \\`Aspect Ratio\\` component for the image.',
      },
    },
  },
  render: () => {
    return (
      <Card>
        <img src="https://picsum.photos/1000/300" alt="Random landscape" />
        <CardHeader>
          <CardTitle>Project Aurora</CardTitle>
          <CardDescription>Explore the future of design systems.</CardDescription>
          <CardAction>
            <Button size="icon" variant="ghost">
              <MoreVertical className="size-4" />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This card features an image header and descriptive content to showcase how visual
            elements can enhance layout structure.
          </p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Explore</Button>
        </CardFooter>
      </Card>
    );
  },
};
