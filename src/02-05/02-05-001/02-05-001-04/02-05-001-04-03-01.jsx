import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={50} {...props}>
    <path d="M8 0L0 8h2.719l5.219-5.25L13.188 8H16L8 0zM7 8h2v42H7V8z" />
  </svg>
);

export default SvgComponent;
