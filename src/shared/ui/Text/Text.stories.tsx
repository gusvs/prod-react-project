import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {},
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
    },
};

export const Error:Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle:Story = {
    args: {
        title: 'Title lorem ipsun',
    },
};

export const OnlyText:Story = {
    args: {
        text: 'Description Description Description Description',
    },
};

export const SizeL: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        size: TextSize.L,
    },
};

export const SizeM: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        size: TextSize.M,
    },
};

export const SizeS: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        size: TextSize.S,
    },
};

export const PrimaryDark:Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark:Story = {
    args: {
        title: 'Title lorem ipsun',
    },
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark:Story = {
    args: {
        text: 'Description Description Description Description',
    },
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
