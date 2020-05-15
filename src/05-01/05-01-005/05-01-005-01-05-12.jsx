import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 13h42v4H15v-4zM13.793 5.086l-.707.707-4.95-4.95.707-.707 4.95 4.95z" />
    <path d="M17 6.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zM6.207 6.914l.707-.707 4.95 4.95-.707.707-4.95-4.95z" />
    <path d="M8 5.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM5.793 13.086l-.707.707-4.95-4.95.707-.707 4.95 4.95z" />
    <path d="M4 14.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" />
  </svg>
);

export default SvgComponent;