import { transparentize } from "polished";
import styled from "../../../styled-components";

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.colors.purple};
  border: none;
  width: 55px;
  height: 55px;
  border-radius: 18px;
  box-shadow: 0 12px 25px 6px
    ${({ theme }) => transparentize(0.4, theme.colors.purple)};
`;

export const Icon = styled.i.attrs(({ theme }) => ({
  "data-eva": "plus-outline",
  "data-eva-fill": theme.colors.white,
  "data-eva-width": 21,
  "data-eva-height": 21
}))``;
