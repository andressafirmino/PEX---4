import styled from 'styled-components';

export const DrinksContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 20px;
`;

export const DrinkOption = styled.div`
    width: 100%;
    display: flex;
    overflow-x: auto;
    white-space: nowrap; 
    scroll-behavior: smooth;
`