import { useContext } from 'react';
import TextOptions from '../TextOptions/TextOptions';
import { DessertOption, DessertsContainer } from './style';
import Dessert from '../Dessert/Dessert';
import { ItemsContext } from '../../context/items';

export default function Desserts() {
    const { menu, setSelectedItems } = useContext(ItemsContext);

    function toggleItems(name: string) {
        const item = menu.desserts.find(dessert => dessert.name === name);
        if (!item) return;

        setSelectedItems(prevItems => {
            const isSelected = prevItems.some(selected => selected.name === name);

            return isSelected
                ? prevItems.filter(selected => selected.name !== name)
                : [...prevItems, item];
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