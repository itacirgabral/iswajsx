import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 0h1v24H9V0zM15.5 1.5L21 7h-2l-3.5-3.5L12 7h-2l5.5-5.5z" />
    <path d="M6 0h3v24H6V0z" fill="#fff" />
    <path d="M5 0h1v24H5V0z" />
    <path d="M15 7v5a3 3 0 01-3 3H0v3h11a5 5 0 005-5V7h-1z" />
  </svg>
);

export default SvgComponent;