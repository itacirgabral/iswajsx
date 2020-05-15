import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 0l9 9H0l9-9zm0 1.438L2.406 8h13.188L9 1.437zM10 9v11a6 6 0 006 6h18v4H17a9 9 0 01-9-9V9h2z" />
    <path d="M9 1.438L15.594 8H2.406L9 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
