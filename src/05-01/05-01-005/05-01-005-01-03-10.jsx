import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 13h42V9H14v4zM8.793 7.914l-.707-.707-4.95 4.95.707.707 4.95-4.95z" />
    <path d="M7.732 8.268a2.5 2.5 0 103.536-3.536 2.5 2.5 0 00-3.536 3.536zM3.207 5.086l.707.707 4.95-4.95-.707-.707-4.95 4.95z" />
    <path d="M5 6.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" />
  </svg>
);

export default SvgComponent;