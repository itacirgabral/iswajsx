import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 16L0 8l8-8v16z" />
    <path d="M8 7v2h12a5 5 0 015 5v1a5 5 0 01-5 5H4v4h15a8 8 0 008-8v-2a7 7 0 00-7-7H8z" />
  </svg>
);

export default SvgComponent;
