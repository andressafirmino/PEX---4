import { useContext } from 'react';
import Snack from '../Snack/Snack';
import TextOptions from '../TextOptions/TextOptions';
import { SnackOption, SnacksContainer } from './style';
import { ItemsContext } from '../../context/items';

export default function Snacks() {
    const { menu, setSelectedItems } = useContext(ItemsContext);

    function toggleItems(name: string) {
        const item = menu.snacks.find(snack => snack.name === name);
        if (!item) return;

        setSelectedItems(prevItems => {
            const isSelected = prevItems.some(selected => selected.name === name);

            return isSelected
                ? prevItems.filter(selected => selected.name !== name)
                : [...prevItems, item];
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