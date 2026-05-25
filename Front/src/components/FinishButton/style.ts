import styled from 'styled-components';
import { FaCircle } from "react-icons/fa6";

export const ButtonContainer = styled.div`
  width: 100vw;
  height: 80px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 25px 10px 25px;
`;

export const Total = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #333333;
`

export const Button = styled.button<ButtonProps>`
  width: 160px;
  height: 35px;
  background-color: ${props => (props.disabled ? '#ccc' : '#32B72F')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 15px;
    font-weight: 400;
    color: #FFFFFF;
    padding: 0;
  }
`

interface ButtonProps {
  disabled?: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background: #F9FAFB;
  padding: 30px 20px 20px 20px;
  border-radius: 12px;
  min-width: 300px;
  max-width: 90%;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  font-size: 15px;
  cursor: pointer;
  color: #1F2937;
`;

export const ItemDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;  
  margin-bottom: 5px;

  p {
    font-size: 15px;
    color: #1F2937;
    display: flex;
    align-items: center;
  }
`

export const CircleIcon = styled(FaCircle)`
  font-size: 5px;
  color: #1F2937;
  margin-right: 5px;
`;

export const TotalContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Confirm = styled.button`
  width: 120px;
  height: 30px;
  background-color: #50D074;
  cursor:pointer;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 13px;
    font-weight: 400;
    color: #FFFFFF;
    padding: 0;
  }
`
