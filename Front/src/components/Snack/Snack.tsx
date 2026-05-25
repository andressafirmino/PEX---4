import { CheckIcon, DescriptionSnack, ImageSnack, NameSnack, PriceSnack, SnackContainer } from "./style";
import type { SnacksType } from "../../protocols";
import { useContext } from "react";
import { ItemsContext } from "../../context/items";

export default function Snack({ snack }: SnacksType) {
    const { selectedItems } = useContext(ItemsContext);
    const selected = selectedItems.some(item => item.name === snack.name);

    return (
        <SnackContainer className={selected ? "selected" : ""}>
            < ImageSnack src={snack.image} />
            <NameSnack><p>{snack.name}</p></NameSnack>
            <DescriptionSnack><p>{snack.description}</p></DescriptionSnack>
            <PriceSnack>
                <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(snack.price)}</p>
                {selected ? <CheckIcon></CheckIcon> : <></>}
            </PriceSnack>
        </SnackContainer>
    );
}