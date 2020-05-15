import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 11h11v16H7zM13 .344l-.875.5L16.844 9H18L13 .344zM6 0l-.688.719L13.595 9H15L6 0zM2.469 3.5l-.5.875 8 4.625H12L2.469 3.5zM.5 7.219l-.25.968L7 10V9h.125L.5 7.219z" />
    <path d="M12 17a2 2 0 100 4 2 2 0 000-4z" fill="#fff" />
  </svg>
);

export default SvgComponent;