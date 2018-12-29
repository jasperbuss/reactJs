import React from "react";

// <i class="fa fa-heart" aria-hidden="true"></i>
export const Liked = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      aria-hidden="true"
    />
  );
};
