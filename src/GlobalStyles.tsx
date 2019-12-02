import { createGlobalStyle } from "./styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    font-family: 'DM Sans', sans-serif;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.colors.darkBlue};
  }

  body, #root {
    min-height: 100vh;
  }
`;
