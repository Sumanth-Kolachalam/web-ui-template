import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from './Form';

import { Input } from '@/lib/components/Input/Input'; // Adjust path to your Input component
import { Button } from '@/lib/components/Button/Button'; // Adjust path to your Button component

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`Form\` component wraps \`react-hook-form\`'s context and provides primitives like:
- \`FormField\`, \`FormItem\`, \`FormLabel\`, \`FormControl\`, \`FormMessage\`

All of which ensure accessible form handling with consistent layout and validation support.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

type RenderEmailFieldProps = {
  field: {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    name: string;
    ref: React.Ref<HTMLInputElement>;
  };
};

const renderEmailField = ({ field }: RenderEmailFieldProps) => {
  return (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input placeholder="you@example.com" {...field} />
      </FormControl>
      <FormDescription>We&#39;ll never share your email.</FormDescription>
      <FormMessage />
    </FormItem>
  );
};

const emailRules = { required: 'Email is required' };

export const Default: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        email: '',
      },
    });

    const onSubmit = (data: { email: string }) => {
      alert(JSON.stringify(data, null, 2));
    };

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-sm space-y-4">
          <FormField
            name="email"
            control={form.control}
            rules={emailRules}
            render={renderEmailField}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  },
};
