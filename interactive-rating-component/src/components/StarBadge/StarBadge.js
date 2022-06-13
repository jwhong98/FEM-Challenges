import React from "react";
import star from "../../images/icon-star.svg";
import { Badge } from "./StarBadgeElements";

const StarBadge = () => {
  return (
    <Badge>
      <img src={star} alt="icon of a star" />
    </Badge>
  );
};

export default StarBadge;
