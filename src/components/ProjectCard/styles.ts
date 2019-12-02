import styled, { css } from "../../styled-components";

type WrapperProps = {
  isActive?: boolean;
  borderColor?: string;
};

type WrapperContentProps = {
  backgroundColor: string | null;
};

export const Container = styled.div`
  margin-top: 25px;
  margin-left: -8px;
  width: 30%;
  cursor: pointer;
`;

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 120px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: ${({ borderColor, isActive }) =>
    isActive && borderColor && `3px solid ${borderColor}`};
  flex-direction: column;
`;

export const WrapperContent = styled.div<WrapperContentProps>`
  border-radius: 18px;
  width: calc(100% - 16px);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ backgroundColor, theme }) =>
    backgroundColor
      ? css`
          background-image: ${backgroundColor};

          ::after,
          ::before {
            content: "";
            width: 80px;
            height: 80px;
            opacity: 0.2;
            border: 25px solid ${({ theme }) => theme.colors.white};
            position: absolute;
          }

          ::before {
            border-radius: 50%;
            top: -70px;
            right: -70px;
          }

          ::after {
            top: 60px;
            right: 60px;
          }
        `
      : css`
          background: ${theme.colors.darkGrey};
        `};
  position: relative;
  overflow: hidden;
`;

export const ProjectInitialLetters = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 25px;
`;

export const Notification = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  top: 6px;
  right: -2px;
  border: 3px solid ${({ theme }) => theme.colors.darkBlue};
  z-index: 1;
`;

export const ProjectName = styled.h1`
  font-size: 14px;
  color: #cdcfe3;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 10px;
  font-weight: 200;
`;
