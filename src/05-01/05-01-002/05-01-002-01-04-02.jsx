import React from "react";

const SvgComponent = (props) => (
  <svg width={50} height={25} {...props}>
    <path d="M50 0L39 1v6L8 12v8l-8 1v4l11-3v-5l31-8V4l8-2V0z" />
  </svg>
);

export default SvgComponent;
