import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 0v15h8V0h-8z" />
    <path fill="#fff" d="M16 1h6v13h-6z" />
    <path d="M0 0h13v4H0zM5 4l8 8V9.187L7.844 4H5z" />
  </svg>
);

export default SvgComponent;
