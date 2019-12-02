import React from "react";
import { darken } from "polished";

import {
  Wrapper,
  ProjectInitialLetters,
  Notification,
  WrapperContent,
  ProjectName,
  Container
} from "./styles";

interface Props {
  projectName?: string;
  isActive?: boolean;
  hasNotification?: boolean;
  color?: string;
  moreProjects?: number;
}

function getProjectInitialLetters(projectName: string): string {
  const splitProjectName: string[] = projectName
    .split(" ")
    .map(letter => letter.toUpperCase());

  if (splitProjectName.length > 1) {
    return `${splitProjectName[0][0]}${splitProjectName[1][0]}`;
  }

  return `${projectName[0]}${projectName[1]}`;
}

function generateBackgroundGradient(color: string): string {
  return `linear-gradient(45deg, ${color}, ${darken(0.25, color)})`;
}

const ProjectCard: React.FC<Props> = ({
  projectName,
  isActive,
  hasNotification,
  color,
  moreProjects
}) => {
  return (
    <Container>
      <Wrapper isActive={isActive} borderColor={color}>
        {!isActive && hasNotification && <Notification />}
        <WrapperContent
          backgroundColor={color ? generateBackgroundGradient(color) : null}
        >
          <ProjectInitialLetters>
            {!!projectName
              ? getProjectInitialLetters(projectName)
              : `${moreProjects}+`}
          </ProjectInitialLetters>
        </WrapperContent>
      </Wrapper>
      {!!projectName && <ProjectName>{projectName}</ProjectName>}
    </Container>
  );
};

export default ProjectCard;
