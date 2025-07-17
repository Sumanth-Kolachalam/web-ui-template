import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from './NavigationMenu';

const meta: Meta<typeof NavigationMenu> = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
\`NavigationMenu\` is a responsive menu component built on Radix primitives.  
It supports multi-level navigation with animated panels and full accessibility.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  render: () => {
    return (
      <div className="flex justify-center p-8">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#">Product_1</NavigationMenuLink>
                <NavigationMenuLink href="#">Product_2</NavigationMenuLink>
                <NavigationMenuLink href="#">Product_3</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#">About</NavigationMenuLink>
                <NavigationMenuLink href="#">Careers</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    );
  },
};
