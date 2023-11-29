import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {},
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
    args: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 36,
            country: Country.Russia,
            lastname: 'Guselnikov',
            first: 'Vitaliy',
            city: 'Moscow',
            currency: Currency.RUB,
            avatar,
        },
    },
})];
export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 36,
            country: Country.Russia,
            lastname: 'Guselnikov',
            first: 'Vitaliy',
            city: 'Moscow',
            currency: Currency.RUB,
            avatar,
        },
    },
})];
