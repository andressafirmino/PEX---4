import { useContext } from "react";
import { Backdrop, CloseButton, ItemDetails, ModalContainer, type ModalProps, CircleIcon, Total, TotalContainer, Confirm } from "./style";
import { ItemsContext } from "../../context/items";
import type { MenuItemType } from "../../protocols";

export default function Modal({ isOpen, onClose }: ModalProps) {
    const { selectedItems, total, setSelectedItems, setTotal } = useContext(ItemsContext);
    if (!isOpen) return null;

    function SendRequest(items: MenuItemType[]) {
        const messageLines = items.map((item) =>
            `- 1 ${item.name}: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}`
        );

        messageLines.unshift("Olá, gostaria de fazer o pedido:");

        const message = `${messageLines.join('\n')}\nTotal: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}`;
        const phoneNumber = '5521999999999'; // Substitua pelo número real
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank');

    }

    return (
        <Backdrop onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>×</CloseButton>
                <p style={{ marginBottom: "25px" }}>Confirme seu pedido:</p>
                {selectedItems.map((item, i) =>
                    <ItemDetails key={i}>
                        <p><CircleIcon></CircleIcon> {item.name}</p>
                        <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}</p>
                    </ItemDetails>
                )}
                <TotalContainer>
                    <Total >Total: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</Total>
                    <Confirm onClick={() => { SendRequest(selectedItems), onClose(), setSelectedItems([]), setTotal(0) }} ><p>Confirmar!</p></Confirm>
                </TotalContainer>
            </ModalContainer>
        </Backdrop>
    );
};

