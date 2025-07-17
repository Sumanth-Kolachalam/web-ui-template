import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Horizontal: Story = {
  render: () => {
    return (
      <Carousel orientation="horizontal">
        <CarouselContent>
          {[1, 2, 3, 4, 5].map((i) => {
            return (
              <CarouselItem
                key={i}
                className="bg-gray-100 text-center flex items-center justify-center rounded-sm border border-gray-300 min-h-[120px]"
              >
                Slide {i}
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    return (
      <Carousel orientation="vertical">
        <CarouselContent>
          {[1, 2, 3, 4, 5].map((i) => {
            return (
              <CarouselItem
                key={i}
                className="bg-gray-100 text-center flex items-center justify-center rounded-sm border border-gray-300 min-h-[120px]"
              >
                Slide {i}
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Position vertically */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  },
};
