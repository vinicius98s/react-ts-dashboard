import React from "react";

import {
  Header,
  DescriptionHeader,
  StyledInput,
  InputWrapper,
  Icon
} from "./styles";

interface Props {
  name: string;
}

const WelcomeHeader: React.FC<Props> = ({ name }) => {
  return (
    <Header>
      <h1>Hi {name}</h1>
      <DescriptionHeader>
        Welcome back to the workspace, we missed you!
      </DescriptionHeader>
      <InputWrapper>
        <Icon />
        <StyledInput placeholder="Search for task or project..." />
      </InputWrapper>
    </Header>
  );
};

export default WelcomeHeader;
