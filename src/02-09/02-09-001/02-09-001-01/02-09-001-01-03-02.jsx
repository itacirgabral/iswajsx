import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 9l-5.5 5.5L0 9h1.5l4 4 4-4H11zM9 0a5 5 0 00-5 5v4h3V4a3 3 0 013-3h9V0H9z" />
  </svg>
);

export default SvgComponent;