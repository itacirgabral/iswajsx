import React from "react";

const SvgComponent = (props) => (
  <svg width={7} height={7} {...props}>
    <path d="M0 7V1.344h1V6h4.656v1H0z" />
    <path d="M6 .281L2.469 3.812l.719.72L6.717 1 6 .281z" />
  </svg>
);

export default SvgComponent;
