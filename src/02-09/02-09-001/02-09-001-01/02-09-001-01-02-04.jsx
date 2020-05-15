import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 0a5 5 0 00-5 5v2a5 5 0 005 5h8V9H5a3 3 0 01-3-3V4a3 3 0 013-3V0zM13 5v11l5.5-5.5L13 5zm1 2.438l3.063 3.062L14 13.563V7.436z" />
    <path d="M14 7.438v6.125l3.063-3.063L14 7.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;