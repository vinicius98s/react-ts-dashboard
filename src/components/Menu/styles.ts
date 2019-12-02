import styled from "../../styled-components";

export const MenuWrapper = styled.div`
  background: ${({ theme }) => theme.colors.lightGrey};
  width: 35px;
  height: 35px;
  position: absolute;
  top: 30px;
  left: 25px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MenuIcon = styled.div`
  width: 14px;
  height: 2px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.white};

  ::before,
  ::after {
    content: "";
    width: 7px;
    height: 2px;
    border-radius: 5px;
    position: absolute;
    background: ${({ theme }) => theme.colors.white};
  }

  ::before {
    margin-top: -6px;
    right: 10px;
  }

  ::after {
    margin-top: 6px;
    left: 10px;
  }
`;
