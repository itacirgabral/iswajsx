import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={36} {...props}>
    <path d="M18 0v4h-.5C10.596 4 5 10.044 5 17.5V36H0V17.5C0 7.835 7.835 0 17.5 0h.5z" />
  </svg>
);

export default SvgComponent;
