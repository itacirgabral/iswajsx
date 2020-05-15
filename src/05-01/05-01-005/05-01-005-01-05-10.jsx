import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 2h42v4H15V2zM13.793 11.914l-.707-.707-4.95 4.95.707.707 4.95-4.95z" />
    <path d="M17 10.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM6.207 10.086l.707.707 4.95-4.95-.707-.707-4.95 4.95z" />
    <path d="M8 11.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zM5.793 3.914l-.707-.707-4.95 4.95.707.707 4.95-4.95z" />
    <path d="M4 2.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" />
  </svg>
);

export default SvgComponent;
