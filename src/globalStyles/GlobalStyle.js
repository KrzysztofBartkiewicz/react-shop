import { createGlobalStyle } from 'styled-components';
import { mainTheme } from '../themes/mainTheme';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
html {
    font-size: 62.5%;

    ${mainTheme.mq.mobile} {
        font-size: 50%;
    }
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
a {
    text-decoration: none;
}
`;

export default GlobalStyle;
