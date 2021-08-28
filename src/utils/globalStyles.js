import { css, createGlobalStyle } from "styled-components";

const reset = css`
  html,
  body {
    font-family: "Helvetica", sans-serif;
    height: 100%;
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
    primary: "#FFF8DC	",
    secondary: "##66CDAA",
    secondary_light: "#AFEEEE",
    secondary_dark: "#20B2AA",
    secondary_dark_dark: "#008B8B",
    danger: ""
  },
};


export { ResetStyles, ProjectTheme };