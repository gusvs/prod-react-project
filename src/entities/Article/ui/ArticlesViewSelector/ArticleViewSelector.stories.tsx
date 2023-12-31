import { Meta, StoryObj } from '@storybook/react';
import { ArticleView } from 'entities/Article';
import { ArticleViewSelector } from './ArticleViewSelector';

const meta = {
    title: 'pages/ArticleViewSelector',
    component: ArticleViewSelector,
    parameters: {},
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
    args: {
    },
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: { view: ArticleView.BIG },
};
