import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 8l5-5-.719-.719L6.594 7H1v1h6z" />
    <path d="M0 5.031L5.406 5 9.72.719 9 0 5 4H0v1.031z" />
  </svg>
);

export default SvgComponent;