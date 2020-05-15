import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L0 8h16L8 0zM7 8v16h17v-2H9V8H7z" />
  </svg>
);

export default SvgComponent;
