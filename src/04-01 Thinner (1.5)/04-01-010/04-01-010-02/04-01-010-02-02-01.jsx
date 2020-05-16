import React from "react";

const SvgComponent = (props) => (
  <svg width={42} height={11} {...props}>
    <path d="M0 7v4h42V7H0zM18.563 0l-2.125 2.125L21.313 7h4.25l-7-7z" />
  </svg>
);

export default SvgComponent;
