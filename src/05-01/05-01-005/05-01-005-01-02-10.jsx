import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M55 10H13v4h42v-4zM9.793 8.914l-.707-.707-4.95 4.95.707.707 4.95-4.95z" />
    <path d="M8 7.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zM5.793 3.914l-.707-.707-4.95 4.95.707.707 4.95-4.95z" />
    <path d="M4 2.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" />
  </svg>
);

export default SvgComponent;