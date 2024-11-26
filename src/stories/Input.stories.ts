import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Input } from '@/components/ui/Input';

const meta = {
  title: 'Ui/Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Username'
  },
};
