import { FaRegCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';

export const DessertContainer = styled.div`
    width: 172px;
    height: 216px;
    display: flex;
    flex-direction: column;
    background-color:rgb(255, 255, 255);
    box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    margin-right: 5px;
    flex-shrink: 0;
    padding: 14px;
`;

export const ImageDessert = styled.img`
    width: 144px;
    height: 87px;
    border-radius: 5px;
    border:solid 1px rgb(232, 217, 217);
    margin-bottom: 3px;
    object-fit: contain;
`;

export const NameDessert = styled.div`
    height: 35px;
    p{
        font-size: 15px;
        font-weight: 700;
        color: #333333;
        word-wrap: break-word;
        white-space: normal;
    }    
`

export const DescriptionDessert = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    p{
    font-size: 14px;
    font-weight: 300;
    color: #A6A6A6;
    word-wrap: break-word;
    white-space: normal;
    }
`

export const PriceDessert = styled.div`
    height: 19px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    p{
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    word-wrap: break-word;
    white-space: normal;
    }   
`

export const CheckIcon = styled(FaRegCheckCircle)`
  font-size: 16px;
  color: #32B72F;
`;