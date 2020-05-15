import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 8h8v18h-8z" />
    <path fill="#fff" d="M11 9h3v16h-3z" />
    <path d="M5 6c-5 0-5 5-5 5v3h3v-2c0-2 2-2 2-2h4V6H5zM16.092 7.017L18 7V0h-7v5h2V3h3l.092 4.017z" />
    <path d="M5.969 3.281l-1.907.5L9 22.25v-7.688L5.969 3.283z" />
  </svg>
);

export default SvgComponent;
