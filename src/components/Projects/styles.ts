import styled from "../../styled-components";

export const Container = styled.div``;

export const ProjectsTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

export const ProjectsTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
`;

export const ProjectsCount = styled.p`
  color: ${({ theme }) => theme.colors.ligthBlue};
  font-size: 14px;
  margin-left: 10px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
