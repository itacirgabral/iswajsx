import React from "react";

const SvgComponent = (props) => (
  <svg width={42} height={32} {...props}>
    <path d="M0 0h42v4H0V0zM0 28h42v4H0v-4zM20 4h2v24h-2V4z" />
  </svg>
);

export default SvgComponent;
