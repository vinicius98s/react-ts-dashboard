import React, { useEffect, useState } from "react";

import {
  Container,
  ProjectTitle,
  HeaderWrapper,
  UsersWrapper,
  UsersAndIconWrapper,
  Image,
  Icon,
  ProjectDescription
} from "./styles";
import ActionButton from "./ActionButton";
import { TODAY_TASKS, UPCOMING_TASKS } from "./constants";

import TodoList from "../TodoList";

interface User {
  id: string;
  name: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const ProjectDetails: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers() {
    const response = await fetch("https://randomuser.me/api/?results=3");
    const { results: users } = await response.json();

    setUsers(
      users.map(({ name, picture, login }: any) => ({
        id: login.uuid,
        name: `${name.first} ${name.last}`,
        picture
      }))
    );
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container>
      <HeaderWrapper>
        <ProjectTitle>Cyber Punk</ProjectTitle>
        <UsersAndIconWrapper>
          <UsersWrapper>
            {!!users.length &&
              users.map((user, index) => (
                <Image
                  src={user.picture.medium}
                  alt={user.name}
                  key={user.id}
                  zIndex={users.length - index}
                />
              ))}
          </UsersWrapper>
          <Icon />
        </UsersAndIconWrapper>
      </HeaderWrapper>
      <ProjectDescription>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
        dolore voluptate voluptatibus ipsa et rerum sapiente sunt odit ullam,
        repellendus vitae dicta voluptas tempore ex architecto dolorum.
      </ProjectDescription>
      <TodoList title="Today" tasks={TODAY_TASKS} />
      <TodoList title="Upcoming" tasks={UPCOMING_TASKS} />
      <ActionButton />
    </Container>
  );
};

export default ProjectDetails;
