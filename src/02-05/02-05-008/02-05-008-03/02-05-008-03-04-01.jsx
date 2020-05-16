import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={20} {...props}>
    <path d="M0 0v20h22v-2H2V0H0z" />
  </svg>
);

export default SvgComponent;
