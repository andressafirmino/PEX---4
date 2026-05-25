import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        text-decoration: none;
    }

    .selected {
    position: relative;
  }

    .selected::after {
        content: "";
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        position: absolute;
        border: 4px solid #32B72F;
        border-radius: 9px;
        box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
        z-index: 1;
    }
`;
export default GlobalStyle;