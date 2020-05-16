import React from "react";

const SvgComponent = (props) => (
  <svg width={9} height={6} {...props}>
    <path d="M0 0v2c0 2.21 2.015 4 4.5 4S9 4.21 9 2V0H0zm1 2h7c0 1.105-1.567 2-3.5 2S1 3.105 1 2z" />
  </svg>
);

export default SvgComponent;
