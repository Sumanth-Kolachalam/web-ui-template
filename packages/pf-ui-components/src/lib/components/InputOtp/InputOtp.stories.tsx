import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from './InputOtp';

const meta: Meta<typeof InputOTP> = {
  title: 'Components/InputOTP',
  component: InputOTP,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
An OTP input field that allows users to input a One-Time Password digit-by-digit.
        `,
      },
    },
  },
  argTypes: {
    maxLength: {
      control: { type: 'number' },
      defaultValue: 6,
      description: 'Number of OTP digits',
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  args: {
    maxLength: 6,
  },
  render: ({ maxLength }) => {
    return (
      <InputOTP maxLength={maxLength}>
        <InputOTPGroup>
          {Array.from({ length: maxLength }).map((_, i) => {
            return <InputOTPSlot key={i} index={i} />;
          })}
        </InputOTPGroup>
      </InputOTP>
    );
  },
};

export const WithSeperator: Story = {
  render: () => {
    return (
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    );
  },
};
