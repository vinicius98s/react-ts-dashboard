import styled, { css } from "../../styled-components";

interface DoneProps {
  isDone: boolean;
}

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey2};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 18px;
  padding-bottom: 15px;
`;

export const TaskWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TaskDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export const TaskDescriptionAndStatusWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const DoneIcon = styled.i.attrs(({ theme }) => ({
  "data-eva": "checkmark-outline",
  "data-eva-fill": theme.colors.white,
  "data-eva-width": 18,
  "data-eva-height": 18
}))``;

export const Done = styled.div<DoneProps>`
  width: 28px;
  height: 28px;
  margin-right: 18px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ isDone, theme }) =>
    isDone
      ? css`
          background: ${theme.colors.lightGreen};
        `
      : css`
          border: 1px solid ${theme.colors.lightGrey2};
        `};
`;

export const MoreActionsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  cursor: pointer;
  width: 28px;
  height: 20px;
`;

export const MoreActionsIcon = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.lightGrey2};
`;
