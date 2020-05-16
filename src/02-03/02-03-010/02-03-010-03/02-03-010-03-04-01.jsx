import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={26} {...props}>
    <path d="M0 0v26h29V0h-2v24H2V0H0z" />
    <path d="M6 0v20h17V0h-2v18H8V0H6z" />
    <path d="M2 0v24h25V0h-4v20H6V0H2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
