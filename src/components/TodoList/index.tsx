import React from "react";

import {
  TitleWrapper,
  Title,
  TaskWrapper,
  TaskDescription,
  TaskDescriptionAndStatusWrapper,
  Done,
  DoneIcon,
  MoreActionsIcon,
  MoreActionsButton
} from "./styles";
import ProgressBadge from "./ProgressBadge";

import { ITasks } from "../ProjectDetails/constants";

interface Props {
  title: string;
  tasks: ITasks[];
}

const TodoList: React.FC<Props> = ({ title, tasks }) => {
  return (
    <>
      <TitleWrapper>
        <Title>{title}</Title>
        <MoreActionsButton>
          <MoreActionsIcon />
          <MoreActionsIcon />
          <MoreActionsIcon />
        </MoreActionsButton>
      </TitleWrapper>
      {tasks.map(task => (
        <TaskWrapper key={task.description}>
          <TaskDescriptionAndStatusWrapper>
            {task.done ? (
              <Done isDone={task.done}>
                <DoneIcon />
              </Done>
            ) : (
              <Done isDone={task.done} />
            )}
            <TaskDescription>{task.description}</TaskDescription>
          </TaskDescriptionAndStatusWrapper>
          <ProgressBadge status={task.status} />
        </TaskWrapper>
      ))}
    </>
  );
};

export default TodoList;
