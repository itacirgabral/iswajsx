import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M58 3H16v4h42V3zM3.207 5.086l.707.707 4.95-4.95-.707-.707-4.95 4.95z" />
    <path d="M0 6.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM10.793 6.914l-.707-.707-4.95 4.95.707.707 4.95-4.95z" />
    <path d="M9 5.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zM11.207 13.086l.707.707 4.95-4.95-.707-.707-4.95 4.95z" />
    <path d="M13 14.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" />
  </svg>
);

export default SvgComponent;
