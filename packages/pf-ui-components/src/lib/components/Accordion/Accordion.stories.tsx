import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `The \`Accordion\` component displays collapsible content panels.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => {
    return (
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is your refund policy?</AccordionTrigger>
          <AccordionContent>
            If you&#39;re not satisfied with your purchase, we offer a full refund within 30 days.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Do you offer technical support?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer 24/7 technical support through chat and email.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};
