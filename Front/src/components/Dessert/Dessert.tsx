import { CheckIcon, DescriptionDessert, DessertContainer, ImageDessert, NameDessert, PriceDessert } from "./style";
import type { DessertsType } from "../../protocols";
import { useContext } from "react";
import { ItemsContext } from "../../context/items";

export default function Dessert({ dessert }: DessertsType) {
    const { selectedItems } = useContext(ItemsContext);
    const selected = selectedItems.some(item => item.name === dessert.name);

    return (
        <DessertContainer className={selected ? "selected" : ""}>
            < ImageDessert src={dessert.image} />
            <NameDessert><p>{dessert.name}</p></NameDessert>
            <DescriptionDessert><p>{dessert.description}</p></DescriptionDessert>
            <PriceDessert>
                <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dessert.price)}</p>
                {selected ? <CheckIcon></CheckIcon> : <></>
                }</PriceDessert>
        </DessertContainer>
    );
}