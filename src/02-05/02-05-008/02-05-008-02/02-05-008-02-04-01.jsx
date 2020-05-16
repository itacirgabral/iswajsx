import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={16} {...props}>
    <path d="M0 0v16h17v-2H2V0H0z" />
  </svg>
);

export default SvgComponent;
