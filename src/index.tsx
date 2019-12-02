import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { theme } from "./assets/theme";
import { ThemeProvider } from "./styled-components";
import GlobalStyles from "./GlobalStyles";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
