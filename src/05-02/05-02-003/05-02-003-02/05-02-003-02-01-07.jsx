import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={2} {...props}>
    <path d="M12 0H0v2h12V0z" />
  </svg>
);

export default SvgComponent;
