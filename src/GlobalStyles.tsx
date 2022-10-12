import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body{
    width: 100vw;
    font:normal normal 400 1rem/1rem "Nunito", sans-serif ;
    background: ${(props) => props.theme.colors.background};
    overflow-x: hidden;
}   

input,button{    
    font:normal normal 400 1rem/1rem "Nunito", sans-serif ;
    background: none;
    border: none;
}

input{
    outline: none;
}
button{
    cursor: pointer;
}


`;
