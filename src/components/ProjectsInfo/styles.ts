import styled from "../../styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: 490px;
`;
