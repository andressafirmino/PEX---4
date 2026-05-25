export type OptionType = {
    text: string;
};

export type MenuItemType = {
    name: string;
    image: string;
    price: number;
    description: string;
};

export type MenuType = {
    desserts: MenuItemType[];
    drinks: MenuItemType[];
    snacks: MenuItemType[];
};

export type DessertsType = {
    dessert: MenuItemType;
};

export type DrinksType = {
    drink: MenuItemType;
};

export type SnacksType = {
    snack: MenuItemType;
};

export const EMPTY_MENU: MenuType = {
    desserts: [],
    drinks: [],
    snacks: [],
};