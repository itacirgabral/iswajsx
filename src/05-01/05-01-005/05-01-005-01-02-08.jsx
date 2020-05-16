import React from "react";

const SvgComponent = (props) => (
  <svg width={55} height={14} {...props}>
    <path d="M42 14H0v-4h42v4zM51.793 8.914l-.707-.707-4.95 4.95.707.707 4.95-4.95z" />
    <path d="M50 7.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zM47.793 3.914l-.707-.707-4.95 4.95.707.707 4.95-4.95z" />
    <path d="M46 2.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" />
  </svg>
);

export default SvgComponent;
