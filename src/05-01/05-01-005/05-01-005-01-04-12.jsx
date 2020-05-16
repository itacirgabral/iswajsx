import React from "react";

const SvgComponent = (props) => (
  <svg width={56} height={19} {...props}>
    <path d="M14 19h42v-4H14v4zM15.793 5.086l-.707.707-4.95-4.95.707-.707 4.95 4.95z" />
    <path d="M14 6.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM10.793 10.086l-.707.707-4.95-4.95.707-.707 4.95 4.95z" />
    <path d="M9 11.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM5.793 15.086l-.707.707-4.95-4.95.707-.707 4.95 4.95z" />
    <path d="M4 16.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" />
  </svg>
);

export default SvgComponent;
