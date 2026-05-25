import { useContext } from 'react';
import TextOptions from '../TextOptions/TextOptions';
import { DrinksContainer, DrinkOption } from './style';
import Drink from '../Drink/Drink';
import { ItemsContext } from '../../context/items';

export default function Drinks() {
    const { menu, setSelectedItems, setTotal } = useContext(ItemsContext);

    function toggleItems(name: string) {
        setSelectedItems(prevItems => {
            const isSelected = prevItems.some(item => item.name === name);

            const newItems = isSelected
                ? prevItems.filter(item => item.name !== name)
                : [...prevItems, menu.drinks.find(item => item.name === name)!];

            const newTotal = newItems.reduce((acc, item) => acc + Number(item.price), 0);
            setTotal(newTotal);

            return newItems;
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