import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body{
    font:normal normal 400 1rem/1rem "Nunito", sans-serif ;
    background: ${(props) =>
      props.theme.colors.background};  transition: background 0.5s;

}   

input,button{    
    font:normal normal 400 1rem/1rem "Nunito", sans-serif ;
    background: none;
    border: none;
}

input{
    flex: 1;
    outline: none;
}
button{
    cursor: pointer;
}


`;
