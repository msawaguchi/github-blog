import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme['base-background']};
        font-family: 'Nunito', sans-serif;
    }

    h1, h2, h3 {
        color: ${(props) => props.theme['base-title']};
    }

    p {
        color: ${(props) => props.theme['base-text']};
        font-weight: 200;
    }

    small {
      color: ${(props) => props.theme['base-span']};
    }

    a {
        text-decoration: none;
    }
`
