import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  fontColor: "rgb(38, 38, 38)",
  bgColor: "#FAFAFA",
  accent: "#0095f6",
  borderColor: "rgb(219, 219, 219)",
};

export const darkTheme = {
  fontColor: "white",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
${reset}
body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.fontColor};
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
}
* {
    box-sizing: border-box;
}
input {
    all: unset;
}
a {
    text-decoration: none;
}

`;
