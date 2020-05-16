import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={18} {...props}>
    <path d="M20 5L15.5.5 11 5h1.438L15.5 1.937 18.563 5H20zM6 18c5.523 0 10-4.477 10-10V5h-1v3a9 9 0 01-9 9H0v1h6z" />
  </svg>
);

export default SvgComponent;
