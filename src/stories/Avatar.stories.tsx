import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';

const meta = {
  title: 'Ui/Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
};
