import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 4l6 6H5l6-6zm0 1.406L7.437 9h7.125L11 5.406z" />
    <path d="M1 0v10a4 4 0 004 4c1.657 0 3-1.79 3-4h6a6 6 0 01-6 6H5a5 5 0 01-5-5V0h1z" />
    <path d="M11 5.406L14.563 9H7.436L11 5.406z" fill="#fff" />
  </svg>
);

export default SvgComponent;
