import { useContext } from 'react';
import TextOptions from '../TextOptions/TextOptions';
import { DessertOption, DessertsContainer } from './style';
import Dessert from '../Dessert/Dessert';
import { ItemsContext } from '../../context/items';

export default function Desserts() {
    const { menu, setSelectedItems, setTotal } = useContext(ItemsContext);

    function toggleItems(name: string) {
        setSelectedItems(prevItems => {
            const isSelected = prevItems.some(item => item.name === name);

            const newItems = isSelected
                ? prevItems.filter(item => item.name !== name)
                : [...prevItems, menu.desserts.find(item => item.name === name)!];

            const newTotal = newItems.reduce((acc, item) => acc + Number(item.price), 0);
            setTotal(newTotal);

            return newItems;
        });
    }

    return (
        <DessertsContainer>
            <TextOptions text='Escolha sua sobremesa' />
            <DessertOption>
                {menu.desserts.length > 0 && (
                    menu.desserts.map((dessert, i) =>
                        <div onClick={() => toggleItems(dessert.name)}>
                            <Dessert dessert={dessert} key={i} />
                        </div>
                    )
                )}
            </DessertOption>
        </DessertsContainer>
    );
}