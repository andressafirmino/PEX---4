import { useContext } from 'react';
import Snack from '../Snack/Snack';
import TextOptions from '../TextOptions/TextOptions';
import { SnackOption, SnacksContainer } from './style';
import { ItemsContext } from '../../context/items';

export default function Snacks() {
    const { menu, setSelectedItems, setTotal } = useContext(ItemsContext);

    function toggleItems(name: string) {
        setSelectedItems(prevItems => {
            const isSelected = prevItems.some(item => item.name === name);

            const newItems = isSelected
                ? prevItems.filter(item => item.name !== name)
                : [...prevItems, menu.snacks.find(item => item.name === name)!];

            const newTotal = newItems.reduce((acc, item) => acc + Number(item.price), 0);
            setTotal(newTotal);

            return newItems;
        });
    }

    return (
        <SnacksContainer>
            <TextOptions text='Escolha seu lanche' />
            <SnackOption>
                {menu.snacks.length > 0 && (
                    menu.snacks.map((snack, i) =>
                        <div onClick={() => toggleItems(snack.name)}>
                            <Snack snack={snack} key={i}
                            />
                        </div>
                    )
                )}
            </SnackOption>
        </SnacksContainer>
    );
}