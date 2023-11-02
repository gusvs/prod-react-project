import { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {},
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
