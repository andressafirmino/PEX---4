export type ApplicationError = {
  name: string;
  message: string;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};

export type ProductCategory = 'snacks' | 'drinks' | 'desserts';

export type Products = {
  name: string;
  price: number;
  description: string;
  type: ProductCategory;
  imageUrl?: string;
};

export type MenuItemType = {
  name: string;
  image: string;
  price: number;
  description: string;
};

export type MenuType = {
  snacks: MenuItemType[];
  drinks: MenuItemType[];
  desserts: MenuItemType[];
};

export type Admin = {
  user: string;
  password: string;
}