import  {createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle ` 
:root {
    --background: #f0f2f5
    --red: #E52e4d
    --blue: #5429cc

    --blue-light: #6933ff

    --text-title: #363f5f
    --text-body: #969cb3

    --background: #f0f2f5
    --shape: #ffffff
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// font-size: 16px (Desktop)
html{
    @media (max-width: 1080px) {
        font-size: 93.5%; // 15px
    }
    @media (max-width: 720px){
        font-size: 87.5%; // 14px
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    
}

button {
    cursor: pointer;
    }

[disabled] {
        opacity: 0.8;
        cursor: not-allowed;
    }
`
