import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before{
        
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, 
    input, 
    button, 
    textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }

    .App {
        height: 100vh;
        display: flex;  
    }

    ul, li {
        list-style: none;
    }
`
export default GlobalStyle