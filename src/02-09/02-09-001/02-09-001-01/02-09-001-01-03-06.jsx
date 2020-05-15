import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15.5.5L21 6h-1.5l-4-4-4 4H10L15.5.5zM15 6v5a3 3 0 01-3 3H0v3h11a5 5 0 005-5V6h-1z" />
  </svg>
);

export default SvgComponent;