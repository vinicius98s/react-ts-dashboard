import styled from "../../styled-components";

interface ImageProps {
  zIndex: number;
}

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 20px);
  margin: 10px;
  padding: 60px;
  border-radius: 25px;
  position: relative;
`;

export const ProjectTitle = styled.h1`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 500;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UsersAndIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UsersWrapper = styled.div`
  display: flex;
`;

export const Image = styled.img<ImageProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.white};
  margin-right: -10px;
  z-index: ${({ zIndex }) => zIndex};
`;

export const Icon = styled.i.attrs(({ theme }) => ({
  "data-eva": "plus-circle-outline",
  "data-eva-fill": theme.colors.lightGrey2,
  "data-eva-width": 30,
  "data-eva-height": 30
}))`
  margin-left: 25px;
  cursor: pointer;
`;

export const ProjectDescription = styled.p`
  color: #a0a8b1;
  font-weight: 200;
  max-width: 70%;
  line-height: 24px;
  margin-top: 10px;
  font-size: 13px;
`;
