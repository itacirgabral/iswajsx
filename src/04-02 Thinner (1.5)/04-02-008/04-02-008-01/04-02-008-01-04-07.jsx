import React from "react";

const SvgComponent = (props) => (
  <svg width={7} height={7} {...props}>
    <path d="M7 3.5L3.5 7l-.719-.719L5.594 3.5 2.78.719 3.5 0 7 3.5z" />
    <path d="M4 4H0V3h4v1z" />
  </svg>
);

export default SvgComponent;
