import React from "react";

import { Container, Wrapper } from "./styles";

import WelcomeHeader from "../WelcomeHeader";
import Projects from "../Projects";

const ProjectsInfo: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <WelcomeHeader name="Vinicius" />
        <Projects />
      </Wrapper>
    </Container>
  );
};

export default ProjectsInfo;
