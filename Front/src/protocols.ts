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

export type ProductCategory = 'snacks' | 'drinks' | 'desserts';

export type AuthCredentials = {
    user: string;
    password: string;
};

export type AuthResponse = {
    user: string;
    role: string;
    token: string;
};

export type StoredAuth = AuthResponse;

export type CreateProductPayload = {
    name: string;
    price: number;
    description: string;
    type: ProductCategory;
    imageUrl?: string;
};

export type ProductRecord = CreateProductPayload & {
    id: number;
    createdAt: string;
    updatedAt: string;
};