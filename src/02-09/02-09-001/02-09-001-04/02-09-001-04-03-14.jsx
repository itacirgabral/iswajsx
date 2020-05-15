import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 0L0 9h2l7-7 7 7h2L9 0zM10 9v11a6 6 0 006 6h18v4H17a9 9 0 01-9-9V9h2z" />
  </svg>
);

export default SvgComponent;