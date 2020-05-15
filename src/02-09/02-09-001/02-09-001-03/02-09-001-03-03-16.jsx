import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M19 0v2l6 6-6 6v2l8-8-8-8zM19 7v2H7a5 5 0 00-5 5v1a5 5 0 005 5h1v4a8 8 0 01-8-8v-2a7 7 0 017-7h12z" />
  </svg>
);

export default SvgComponent;