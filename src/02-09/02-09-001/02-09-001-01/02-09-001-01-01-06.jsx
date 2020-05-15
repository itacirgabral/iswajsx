import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 6L15.5.5 21 6H10zM15 6v5a3 3 0 01-3 3H0v3h11a5 5 0 005-5V6h-1z" />
  </svg>
);

export default SvgComponent;
