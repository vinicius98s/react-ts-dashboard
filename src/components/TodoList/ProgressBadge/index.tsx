import React from "react";

import { BadgeBackground } from "./styles";

export type Status = "approved" | "progress" | "review" | "waiting";

interface Props {
  status: Status;
}

interface IDetails {
  displayName: string;
  badgeBackgroundColor: string;
  badgeFontColor: string;
}

interface IDetailedStatus {
  [key: string]: IDetails;
}

function getStatusInfo(statusName: string): IDetails {
  const detailedStatus: IDetailedStatus = {
    approved: {
      displayName: "Approved",
      badgeBackgroundColor: "#E0F5F5",
      badgeFontColor: "#5FB1B1"
    },
    progress: {
      displayName: "In Progress",
      badgeBackgroundColor: "#E4EFFD",
      badgeFontColor: "#7FA1CC"
    },
    review: {
      displayName: "In Review",
      badgeBackgroundColor: "#FCEEE8",
      badgeFontColor: "#E2B9A9"
    },
    waiting: {
      displayName: "Waiting",
      badgeBackgroundColor: "#ECEEF0",
      badgeFontColor: "#A1A9B2"
    }
  };

  return detailedStatus[statusName];
}

const ProgressBadge: React.FC<Props> = ({ status }) => {
  const { displayName, badgeFontColor, badgeBackgroundColor } = getStatusInfo(
    status
  );

  return (
    <BadgeBackground
      color={badgeFontColor}
      backgroundColor={badgeBackgroundColor}
    >
      {displayName}
    </BadgeBackground>
  );
};

export default ProgressBadge;
