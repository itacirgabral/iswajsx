import React from "react";

const SvgComponent = (props) => (
  <svg width={6} height={6} {...props}>
    <path d="M0 0v5h1V1h4V0H0z" />
    <path d="M1.05 3.172L3.878 6l.708-.707-2.829-2.829-.707.708zM2.464 1.757l2.829 2.829L6 3.879 3.17 1.05l-.707.707z" />
  </svg>
);

export default SvgComponent;
