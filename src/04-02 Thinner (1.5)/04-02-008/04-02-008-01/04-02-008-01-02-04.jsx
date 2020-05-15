import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 7V1.344h1V6h4.656v1H0z" />
    <path d="M6 .281L2.469 3.812l.719.72L6.717 1 6 .281zM11 7V1.344h1V6h4.656v1H11z" />
    <path d="M17 .281l-3.531 3.531.719.72L17.718 1 17 .281z" />
  </svg>
);

export default SvgComponent;