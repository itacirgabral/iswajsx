import React from "react";

const SvgComponent = (props) => (
  <svg width={55} height={11} {...props}>
    <path d="M12 0L0 2v4l9-2.5V11l34-8v7l12-4V4l-9 2V0L12 6V0z" />
  </svg>
);

export default SvgComponent;
