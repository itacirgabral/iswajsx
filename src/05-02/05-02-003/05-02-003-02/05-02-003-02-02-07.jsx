import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={4} {...props}>
    <path d="M12 0H0v4h12V0z" />
  </svg>
);

export default SvgComponent;
