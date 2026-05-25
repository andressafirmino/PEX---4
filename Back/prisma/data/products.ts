type ProductCategory = 'snacks' | 'drinks' | 'desserts';

type SeedProduct = {
  name: string;
  price: number;
  description: string;
  type: ProductCategory;
  imageFile: string;
};

export const seedProducts: SeedProduct[] = [
  {
    name: 'Beijinho',
    price: 3,
    description: 'Doce de coco com leite condensado, coberto com açúcar cristal.',
    type: 'desserts',
    imageFile: 'beijinho.png',
  },
  {
    name: 'Brigadeiro',
    price: 3,
    description: 'Tradicional doce de chocolate brasileiro com granulado.',
    type: 'desserts',
    imageFile: 'brigadeiro.png',
  },
  {
    name: 'Água com gás',
    price: 3.5,
    description: 'Água mineral gaseificada.',
    type: 'drinks',
    imageFile: 'agua-com-gas.png',
  },
  {
    name: 'Água sem gás',
    price: 2,
    description: 'Água mineral natural.',
    type: 'drinks',
    imageFile: 'agua.png',
  },
  {
    name: 'Coca-Cola Lata',
    price: 8,
    description: 'Refrigerante Coca-Cola em lata de 350ml.',
    type: 'drinks',
    imageFile: 'coca-cola.png',
  },
  {
    name: 'Guaraná',
    price: 8,
    description: 'Refrigerante de guaraná em lata de 350ml.',
    type: 'drinks',
    imageFile: 'guarana.png',
  },
  {
    name: 'Bolinho de aipim com carne moída',
    price: 5,
    description: 'Massa de aipim frita recheada com carne moída temperada.',
    type: 'snacks',
    imageFile: 'aipim-carne.jpg',
  },
  {
    name: 'Empadinha de frango',
    price: 5,
    description: 'Empadinha com recheio de frango desfiado.',
    type: 'snacks',
    imageFile: 'empada-frango.png',
  },
  {
    name: 'Enroladinho de salsicha',
    price: 5,
    description: 'Massa frita recheada com salsicha.',
    type: 'snacks',
    imageFile: 'enroladinho-salsicha.png',
  },
  {
    name: 'Hambúrguer de forno',
    price: 5,
    description: 'Pão recheado com hambúrguer e cheddar, assado no forno.',
    type: 'snacks',
    imageFile: 'hamburguer.png',
  },
  {
    name: 'Joelho de queijo com presunto',
    price: 5,
    description: 'Lanche assado com recheio de presunto e queijo.',
    type: 'snacks',
    imageFile: 'joelho-queijo-presunto.png',
  },
  {
    name: 'Pão com ovo',
    price: 5,
    description: 'Pão francês recheado com ovo frito na chapa.',
    type: 'snacks',
    imageFile: 'pao-ovo.jpg',
  },
];

export function buildImageUrl(baseUrl: string, type: ProductCategory, imageFile: string): string {
  const normalizedBase = baseUrl.replace(/\/$/, '');
  return `${normalizedBase}/images/${type}/${imageFile}`;
}
