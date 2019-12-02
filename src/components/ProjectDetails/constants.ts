import { Status } from "../TodoList/ProgressBadge";

export interface ITasks {
  done: boolean;
  description: string;
  status: Status;
}

export const UPCOMING_TASKS: ITasks[] = [
  {
    done: false,
    description: "Enhnance dashboard performance",
    status: "waiting"
  },
  {
    done: false,
    description: "Create better animations",
    status: "waiting"
  }
];

export const TODAY_TASKS: ITasks[] = [
  {
    done: true,
    description: "Create initial layout for homepage",
    status: "approved"
  },
  {
    done: true,
    description: "Fixing icons with transparent background",
    status: "progress"
  },
  {
    done: true,
    description: "Send assets for development",
    status: "progress"
  },
  {
    done: true,
    description: "Create layout for dashboard",
    status: "progress"
  },
  {
    done: false,
    description: "Discussions regarding workflow improvement",
    status: "review"
  },
  {
    done: false,
    description: "Create quotation for app redesign project",
    status: "waiting"
  }
];
