import React from "react";

const SvgComponent = (props) => (
  <svg width={50} height={20} {...props}>
    <path d="M0 0v2l39 9v6l11 3v-4l-8-1V6L0 0z" />
  </svg>
);

export default SvgComponent;
