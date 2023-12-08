import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { action } from '@storybook/addon-actions';
import addCommentForm from './AddCommentForm';

const meta = {
    title: 'features/addCommentForm',
    component: addCommentForm,
    parameters: {},
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof addCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
};
Primary.decorators = [
    StoreDecorator({}),
];
