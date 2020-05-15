import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4.5.5L0 5h1l3.5-3.5L8 5h1L4.5.5zM4 5v13a4 4 0 004 4 5 5 0 005-5H8c0 1.657-.672 3-1.5 3S5 18.657 5 17V5H4z" />
  </svg>
);

export default SvgComponent;