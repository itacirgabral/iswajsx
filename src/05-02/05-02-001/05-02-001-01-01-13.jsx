import React from "react";

const SvgComponent = (props) => (
  <svg width={33} height={39} {...props}>
    <path d="M33 0v39H0v-2h31V0h2z" />
  </svg>
);

export default SvgComponent;
