import { css, createGlobalStyle } from "styled-components";

const reset = css`
  html,
  body {
    font-family: "Helvetica", sans-serif;
    height: 100%;
    background: lightgray;
    background-image: url("../images/bg.png");
    width: 100%; 
    height: 100%;
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
    object-fit: cover;
 
  }
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  a,
  address,
  img,
  strong,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  table,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  footer,
  header,
  main,
  nav,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  body {
    background-color: white;
    font-family: "Helvetica", "Verdana", "Lucida Console", "monospace"; 
  }
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const ResetStyles = createGlobalStyle`${reset}`;

const ProjectTheme = {
  color: {
    primary: "red",
    secondary: "##66CDAA",
    secondary_light: "#AFEEEE",
    secondary_dark: "#20B2AA",
    secondary_dark_dark: "#008B8B",
    danger: "#fff",
    shadow: "rgba(0 123 255 / 25%)",
    buttonshadow:  "rgba(0, 0, 0, 0.15)",
    boxshadow: "rgba(0 0 0 / 15%)",
    button: "rgba(102, 205, 170)",
    navbar:"rgba(68, 183, 219) ",
    transparentWhite: "rgba(255, 255, 255, 0.5)",
    editBtn: "rgba(82, 189, 201)",
    inputshadow: "0 0 0 0.2rem rgba(0 123 255 / 25%)"
  },
};

export { ResetStyles, ProjectTheme };