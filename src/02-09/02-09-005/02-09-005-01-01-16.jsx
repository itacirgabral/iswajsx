import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 6a5 5 0 00-5 5v2a5 5 0 005 5v-3a3 3 0 01-3-3v-2a3 3 0 013-3h9V6H5zM14 1v11l5.5-5.5L14 1z" />
    <path d="M7 0H6v24h1V0z" />
    <path d="M10 0H7v24h3V0z" fill="#fff" />
    <path d="M11 0h-1v24h1V0z" />
  </svg>
);

export default SvgComponent;