import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 3.5L3.5 7l-.719-.719L5.594 3.5 2.78.719 3.5 0 7 3.5z" />
    <path d="M4 5H0V4h4v1zM4 3H0V2h4v1z" />
  </svg>
);

export default SvgComponent;
