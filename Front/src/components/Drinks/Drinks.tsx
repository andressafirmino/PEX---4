import { useContext } from 'react';
import TextOptions from '../TextOptions/TextOptions';
import { DrinksContainer, DrinkOption } from './style';
import Drink from '../Drink/Drink';
import { ItemsContext } from '../../context/items';

export default function Drinks() {
    const { menu, setSelectedItems } = useContext(ItemsContext);

    function toggleItems(name: string) {
        const item = menu.drinks.find(drink => drink.name === name);
        if (!item) return;

        setSelectedItems(prevItems => {
            const isSelected = prevItems.some(selected => selected.name === name);

            return isSelected
                ? prevItems.filter(selected => selected.name !== name)
                : [...prevItems, item];
        });
    }

    return (
        <DrinksContainer>
            <TextOptions text='Escolha sua bebida' />
            <DrinkOption>
                {menu.drinks.length > 0 && (
                    menu.drinks.map((drink, i) =>
                        <div onClick={() => toggleItems(drink.name)}>
                            <Drink drink={drink} key={i} />
                        </div>
                    )
                )}
            </DrinkOption>
        </DrinksContainer >
    );
}