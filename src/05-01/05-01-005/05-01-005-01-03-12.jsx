import React from "react";

const SvgComponent = (props) => (
  <svg width={56} height={12} {...props}>
    <path d="M14 12h42V8H14v4zM5.086 8.793l.707-.707-4.95-4.95-.707.707 4.95 4.95z" />
    <path d="M4.732 7.732a2.5 2.5 0 103.536 3.536 2.5 2.5 0 00-3.536-3.536zM7.914 3.207l-.707.707 4.95 4.95.707-.707-4.95-4.95z" />
    <path d="M6.5 5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
  </svg>
);

export default SvgComponent;
