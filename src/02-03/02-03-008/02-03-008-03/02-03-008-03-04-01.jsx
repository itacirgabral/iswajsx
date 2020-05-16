import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={26} {...props}>
    <path d="M0 0v26h23v-2H2V0H0z" />
    <path d="M6 0v20h17v-2H8V0H6z" />
    <path d="M2 0v24h21v-4H6V0H2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
