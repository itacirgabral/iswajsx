import React from "react";

const SvgComponent = (props) => (
  <svg width={42} height={11} {...props}>
    <path d="M42 7v4H0V7h42zM23.438 0l2.125 2.125L20.688 7h-4.25l7-7z" />
  </svg>
);

export default SvgComponent;
