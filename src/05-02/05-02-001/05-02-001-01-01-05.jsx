import React from "react";

const SvgComponent = (props) => (
  <svg width={33} height={39} {...props}>
    <path d="M0 0v39h33v-2H2V0H0z" />
  </svg>
);

export default SvgComponent;
