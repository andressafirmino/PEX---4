import { useContext, useState } from "react";
import { ButtonContainer, Button } from "./style";
import { ItemsContext } from "../../context/items";
import Modal from "./Modal";

export default function FinishButton() {
    const { total } = useContext(ItemsContext);
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <ButtonContainer>
            <p>Total: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</p>
            <Button disabled={total === 0} onClick={() => setModalOpen(true)}>
                <p>Finalizar pedido!</p>
            </Button>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}></Modal>
        </ButtonContainer>
    );
}