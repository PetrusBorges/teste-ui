import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '@/components/ui/Button';

const meta = {
  title: 'Ui/Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'default'
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive'
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost'
  },
};
