import type { Meta, StoryObj } from '@storybook/react';

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger, } from '@/components/ui/DropdownMenu';
import { Button } from '@/components/ui/Button';

const meta = {
  title: 'Ui/Components/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <div className='w-full flex justify-center mt-10'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard />
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Keyboard />
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Users />
              <span>Team</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus />
                <span>Invite users</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail />
                    <span>Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare />
                    <span>Message</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusCircle />
                    <span>More...</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <Plus />
              <span>New Team</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Github />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LifeBuoy />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Cloud />
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
};