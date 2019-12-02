import styled from "../../../styled-components";

interface BadgeBackgroundProps {
  backgroundColor: string;
  color: string;
}

export const BadgeBackground = styled.div<BadgeBackgroundProps>`
  background: ${({ backgroundColor }) => backgroundColor};
  width: 100px;
  height: 25px;
  color: ${({ color }) => color};
  display: flex;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
`;
