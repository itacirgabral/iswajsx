import React from "react";

const SvgComponent = (props) => (
  <svg width={42} height={11} {...props}>
    <path d="M0 4V0h42v4H0zM18.563 11l-2.125-2.125L21.313 4h4.25l-7 7z" />
  </svg>
);

export default SvgComponent;
