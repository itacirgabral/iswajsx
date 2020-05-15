import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6.05 8H11V3.05L6.05 8zm1.68-.707l2.563-2.563v2.563H7.73z" />
    <path d="M8.525 1.282a3.5 3.5 0 00-.331 4.575l.729-.73a2.491 2.491 0 01.31-3.137 2.5 2.5 0 013.535 0l6.717 6.717c2.014 2.014 3.536 7.778 3.536 7.778l4.95-4.95S22.206 10.015 20.192 8l-6.717-6.718a3.5 3.5 0 00-4.95 0zM11.636 22H18v-6.364L11.636 22zm1.68-.707l3.977-3.978v3.978h-3.978z" />
    <path d="M1.03 8.565a3 3 0 014.242 0l7.071 7.071c1.054 1.054 4.243 1.414 4.243 1.414l-3.536 3.536s-.36-3.189-1.414-4.243l-7.071-7.07A2 2 0 101.737 12.1l2.828 2.828-.707.707-2.829-2.828a3 3 0 010-4.243z" />
    <path
      d="M7.73 7.293h2.563V4.73L7.73 7.293zM13.315 21.293h3.978v-3.978l-3.978 3.978z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
