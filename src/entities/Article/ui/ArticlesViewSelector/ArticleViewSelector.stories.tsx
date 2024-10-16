import { Meta, StoryObj } from '@storybook/react';
import { ArticleView } from '../../model/types/article';
import { ArticleViewSelector } from './ArticleViewSelector';

const meta = {
    title: 'entities/Article/ArticleViewSelector',
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
