import { dessertImages } from "./dessertImages";
import { drinkImages } from "./drinkImages";
import { snackImages } from "./snackImages";
import type { MenuType } from "../protocols";

export const menuData: MenuType = {
    desserts: [
        {
            name: "Beijinho",
            image: dessertImages.beijinho,
            price: 3.0,
            description: "Doce de coco com leite condensado, coberto com açúcar cristal."
        },
        {
            name: "Brigadeiro",
            image: dessertImages.brigadeiro,
            price: 3.00,
            description: "Tradicional doce de chocolate brasileiro com granulado."
        }
    ],
    drinks: [
        {
            name: "Água com gás",
            image: drinkImages.aguaComGas,
            price: 3.50,
            description: "Água mineral gaseificada."
        },
        {
            name: "Água sem gás",
            image: drinkImages.aguaSemGas,
            price: 2.00,
            description: "Água mineral natural."
        },
        {
            name: "Coca-Cola Lata",
            image: drinkImages.cocaCola,
            price: 8.00,
            description: "Refrigerante Coca-Cola em lata de 350ml."
        },
        {
            name: "Guaraná",
            image: drinkImages.guarana,
            price: 8.00,
            description: "Refrigerante de guaraná em lata de 350ml."
        }
    ],
    snacks: [
        {
            name: "Bolinho de aipim com carne moída",
            image: snackImages.bolinhoAipim,
            price: 5.00,
            description: "Massa de aipim frita recheada com carne moída temperada."
        },
        {
            name: "Empadinha de frango",
            image: snackImages.empadinha,
            price: 5.00,
            description: "Empadinha com recheio de frango desfiado."
        },
        {
            name: "Enroladinho de salsicha",
            image: snackImages.enroladinho,
            price: 5.00,
            description: "Massa frita recheada com salsicha."
        },
        {
            name: "Hambúrguer de forno",
            image: snackImages.hamburguer,
            price: 5.00,
            description: "Pão recheado com hambúrguer e cheddar, assado no forno."
        },
        {
            name: "Joelho de queijo com presunto",
            image: snackImages.joelho,
            price: 5.00,
            description: "Lanche assado com recheio de presunto e queijo."
        },
        {
            name: "Pão com ovo",
            image: snackImages.paoComOvo,
            price: 5.00,
            description: "Pão francês recheado com ovo frito na chapa."
        }
    ]
};
