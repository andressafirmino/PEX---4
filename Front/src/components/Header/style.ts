import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 92px;
  background-color: #CF2B2B;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0 10px 0;
`;

export const TitleHeader = styled.p`
    font-size: 40px;
    font-weight: 400;
    color: #FFFFFF;
    margin-bottom: 5px;
`;

export const SubtitleHeader = styled.p`
     font-size: 18px;
    font-weight: 400;
    color: #FFFFFF;
`;