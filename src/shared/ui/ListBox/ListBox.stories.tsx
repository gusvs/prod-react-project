import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ListBox } from './ListBox';

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    parameters: {},
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
    args: {},
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        items: [
            {
                content: 'sdfsdfgsdfgsd',
                value: 'sdfsf',
            },
            {
                content: 'sdfsdfgsdfgsd',
                value: 'sdfsf',
            },
        ],
        value: '12334',
    },
};

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        value: '12334',
        items: [
            {
                content: 'sdfsdfgsdfgsd',
                value: 'sdfsf',
            },
            {
                content: 'sdfsdfgsdfgsd',
                value: 'sdfsf',
            },
        ],
    },
};

export const TopRight: Story = {
    args: {
        direction: 'top right',
        value: '12334',
        items: [
            {
                content: 'sdfsdfgsdfgsd',
                value: 'sdfsf',
            },
            {
                content: 'sdfsdfgsdfgsd',
                value: 'sdfsf',
            },
        ],
    },
};

export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        value: '12334',
        items: [
            {
                content: 'sdfsdfgsdfgsd',
                value: 'sdfsf',
            },
            {
                content: 'sdfsdfgsdfgsd',
                value: 'sdfsf',
            },
        ],
    },
};

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        value: '12334',
        items: [
            {
                content: 'sdfsdfgsdfgsd',
                value: 'sdfsf',
            },
            {
                content: 'sdfsdfgsdfgsd',
                value: 'sdfsf',
            },
        ],
    },
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
