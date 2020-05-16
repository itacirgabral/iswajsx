import React from "react";

const SvgComponent = (props) => (
  <svg width={55} height={14} {...props}>
    <path d="M13 14h42v-4H13v4zM3.207 8.914l.707-.707 4.95 4.95-.707.707-4.95-4.95z" />
    <path d="M5 7.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM7.207 3.914l.707-.707 4.95 4.95-.707.707-4.95-4.95z" />
    <path d="M9 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

export default SvgComponent;
