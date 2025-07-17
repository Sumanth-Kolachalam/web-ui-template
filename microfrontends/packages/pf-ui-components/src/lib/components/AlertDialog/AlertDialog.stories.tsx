import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/lib/components/Button/Button';

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from './AlertDialog';

const meta: Meta<typeof AlertDialog> = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**AlertDialog** is used for confirming irreversible or critical actions like deletions.

Includes subcomponents for trigger, content, header/footer, and actions.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

// 1. Default Story
export const Default: Story = {
  render: (dialogProps?: Partial<React.ComponentProps<typeof AlertDialog>>) => {
    return (
      <AlertDialog {...dialogProps}>
        <AlertDialogTrigger>
          <Button>Open Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
};

// 2. Danger Variant
export const Danger: Story = {
  render: () => {
    return (
      <AlertDialog>
        <AlertDialogTrigger>
          <Button variant={'destructive'}>Delete Account</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete your account?</AlertDialogTitle>
            <AlertDialogDescription>
              All of your data will be permanently removed. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-gray-100 hover:bg-gray-200">No</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 text-white hover:bg-red-700">
              Yes, delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
};

// 3. With Long Content
export const WithLongContent: Story = {
  render: () => {
    return (
      <AlertDialog>
        <AlertDialogTrigger>
          <Button variant={'secondary'}>Show Info</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-h-[80vh] overflow-y-auto">
          <AlertDialogHeader>
            <AlertDialogTitle>Privacy Terms</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="space-y-2">
                {Array.from({ length: 20 }).map((_, i) => {
                  return (
                    <p key={i}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                      Praesent libero. Sed cursus ante dapibus diam.
                    </p>
                  );
                })}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Decline</AlertDialogCancel>
            <AlertDialogAction>Accept</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
};

// 4. With Custom Buttons
export const WithCustomButtons: Story = {
  render: () => {
    return (
      <AlertDialog>
        <AlertDialogTrigger>
          <Button variant={'outline'}>Trigger</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Leave workspace?</AlertDialogTitle>
            <AlertDialogDescription>
              You will lose access to all documents in this workspace.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="underline text-sm text-gray-500">
              Nevermind
            </AlertDialogCancel>
            <AlertDialogAction className="bg-indigo-600 text-white hover:bg-indigo-700">
              Leave
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
};

// 5. Open By Default
export const OpenByDefault: Story = {
  args: {
    defaultOpen: true,
  },
  render: (dialogProps?: Partial<React.ComponentProps<typeof AlertDialog>>) => {
    return (
      <AlertDialog {...dialogProps}>
        <AlertDialogTrigger>
          <Button>Open Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
};
