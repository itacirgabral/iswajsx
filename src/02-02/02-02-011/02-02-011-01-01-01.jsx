import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={10} {...props}>
    <path d="M8 2.281l-5 5L3.719 8 8 3.719 12.281 8 13 7.281l-5-5zM0 0v1h16V0H0zM0 9v1h16V9H0z" />
  </svg>
);

export default SvgComponent;
