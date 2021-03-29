import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  fontColor: "#2c2c2c",
  bgColor: "lightgray",
  accent: "#0095f6",
  borderColor: "rgb(219,219,219)",
};

export const darkTheme = {
  fontColor: "lightgray",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
${reset}
body {
    background-color: ${(props) => props.theme.bgColor};
    color: rgb(38,38,38);
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
