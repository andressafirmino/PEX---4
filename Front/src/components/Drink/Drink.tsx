import { CheckIcon, DescriptionDrink, DrinkContainer, ImageDrink, NameDrink, PriceDrink } from "./style";
import type { DrinksType } from "../../protocols";
import { useContext } from "react";
import { ItemsContext } from "../../context/items";

export default function Drink({ drink }: DrinksType) {
    const { selectedItems } = useContext(ItemsContext);
    const selected = selectedItems.some(item => item.name === drink.name);

    return (
        <DrinkContainer className={selected ? "selected" : ""}>
            < ImageDrink src={drink.image} />
            <NameDrink><p>{drink.name}</p></NameDrink>
            <DescriptionDrink><p>{drink.description}</p></DescriptionDrink>
            <PriceDrink>
                <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(drink.price)}</p>
                {selected ? <CheckIcon></CheckIcon> : <></>}
            </PriceDrink>
        </DrinkContainer>
    );
}