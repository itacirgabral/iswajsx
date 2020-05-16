import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={34} {...props}>
    <path d="M4 0h2v34H4V0zM10 0h2v34h-2V0z" />
    <path d="M6 0v34h4V0H6z" fill="#fff" />
    <path d="M16 34l-4-8H4l-4 8h16z" />
  </svg>
);

export default SvgComponent;
