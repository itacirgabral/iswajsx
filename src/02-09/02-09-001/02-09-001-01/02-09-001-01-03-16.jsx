import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 5a5 5 0 00-5 5v2a5 5 0 005 5v-3a3 3 0 01-3-3V9a3 3 0 013-3h9V5H5zM14 0l5.5 5.5L14 11V9.5l4-4-4-4V0z" />
  </svg>
);

export default SvgComponent;