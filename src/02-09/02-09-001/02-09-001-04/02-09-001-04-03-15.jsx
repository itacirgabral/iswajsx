import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M26 0v2l6 6-6 6v2l8-8-8-8z" />
    <path d="M26 7v2H8a6 6 0 00-6 6v3a6 6 0 006 6h21v4H9a9 9 0 01-9-9v-4a8 8 0 018-8h18z" />
  </svg>
);

export default SvgComponent;