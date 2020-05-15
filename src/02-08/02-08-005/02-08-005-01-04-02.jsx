import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13 3L9.5 6.5 6 3h7z" />
    <path d="M6.5 0a3.5 3.5 0 013.469 3H8.938C8.704 1.86 7.707 1 6.5 1A2.5 2.5 0 004 3.5V13c0 2.848 3 8 3 8H0s3-5.152 3-8V3.5A3.5 3.5 0 016.5 0z" />
  </svg>
);

export default SvgComponent;
