import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import { Theme } from "./assets/theme";

const {
  default: styled,
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export { createGlobalStyle, css, keyframes, ThemeProvider };

export default styled;
