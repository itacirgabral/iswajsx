import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M42 0H0v4h42V0zM53.793 5.086l-.707.707-4.95-4.95.707-.707 4.95 4.95z" />
    <path d="M57 6.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zM48.793 10.086l-.707.707-4.95-4.95.707-.707 4.95 4.95z" />
    <path d="M47 11.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM43.793 15.086l-.707.707-4.95-4.95.707-.707 4.95 4.95z" />
    <path d="M42 16.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" />
  </svg>
);

export default SvgComponent;