import styled from "../../styled-components";

export const Header = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

export const DescriptionHeader = styled.p`
  color: ${({ theme }) => theme.colors.ligthBlue};
  font-size: 18px;
  margin-top: 10px;
`;

export const StyledInput = styled.input`
  background: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  padding: 10px 20px 10px 60px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.4;
    font-weight: 200;
  }
`;

export const InputWrapper = styled.div`
  margin-top: 30px;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Icon = styled.i.attrs(({ theme }) => ({
  "data-eva": "search-outline",
  "data-eva-fill": theme.colors.white,
  "data-eva-width": 20,
  "data-eva-height": 20
}))`
  position: absolute;
  margin-left: 20px;
`;
