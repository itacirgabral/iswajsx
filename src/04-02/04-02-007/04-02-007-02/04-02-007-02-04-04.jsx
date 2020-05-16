import React from "react";

const SvgComponent = (props) => (
  <svg width={6} height={6} {...props}>
    <path d="M0 6V1h1v4h4v1H0z" />
    <path d="M1.05 2.828L3.878 0l.708.707-2.829 2.829-.707-.708zM2.464 4.243l2.829-2.829.707.707L3.17 4.95l-.707-.707z" />
  </svg>
);

export default SvgComponent;
