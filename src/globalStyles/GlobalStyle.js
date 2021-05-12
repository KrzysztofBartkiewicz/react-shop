import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

html {
    font-size: 62.5%;
}

body {
    font-family: 'Poppins', sans-serif;
}

button, input, textarea {
    font-family: inherit;
}

button {
    cursor: pointer;
}

ul {
    list-style: none
}

`;

export default GlobalStyle;
