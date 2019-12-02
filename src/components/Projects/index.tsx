import React from "react";

import {
  Container,
  ProjectsTitle,
  ProjectsTitleWrapper,
  ProjectsCount,
  CardsWrapper
} from "./styles";

import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <Container>
      <ProjectsTitleWrapper>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsCount>(13)</ProjectsCount>
      </ProjectsTitleWrapper>

      <CardsWrapper>
        <ProjectCard projectName="Green House" color="#EC5CC7" />
        <ProjectCard projectName="Cyber Punk" isActive color="#65C1F2" />
        <ProjectCard
          projectName="Easy Crypto"
          hasNotification
          color="#BD67D3"
        />
        <ProjectCard projectName="Travel App" color="#7348F0" />
        <ProjectCard
          projectName="Landing Page"
          color="#F7BE74"
          hasNotification
        />
        <ProjectCard moreProjects={8} />
      </CardsWrapper>
    </Container>
  );
};

export default Projects;
