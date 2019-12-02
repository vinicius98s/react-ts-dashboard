import React, { useEffect } from "react";
import * as eva from "eva-icons";

import styled from "./styled-components";

import ProjectsInfo from "./components/ProjectsInfo";
import ProjectDetails from "./components/ProjectDetails";
import Menu from "./components/Menu";

const AppWrapper = styled.div`
  display: flex;

  & > div:first-child {
    width: 50%;
  }

  & > div:last-child {
    width: 50%;
  }
`;

const App: React.FC = () => {
  useEffect(() => {
    eva.replace();
  }, []);

  return (
    <>
      <Menu />
      <AppWrapper>
        <ProjectsInfo />
        <ProjectDetails />
      </AppWrapper>
    </>
  );
};

export default App;
