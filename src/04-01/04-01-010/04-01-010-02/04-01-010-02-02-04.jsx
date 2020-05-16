import React from "react";

const SvgComponent = (props) => (
  <svg width={42} height={11} {...props}>
    <path d="M42 4V0H0v4h42zM11 11l2.125-2.125L8.25 4H4l7 7z" />
  </svg>
);

export default SvgComponent;
