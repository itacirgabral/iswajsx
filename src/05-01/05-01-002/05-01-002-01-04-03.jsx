import React from "react";

const SvgComponent = (props) => (
  <svg width={55} height={11} {...props}>
    <path d="M43 0l12 2v4l-9-2.5V11L12 3v7L0 6V4l9 2V0l34 6V0z" />
  </svg>
);

export default SvgComponent;
