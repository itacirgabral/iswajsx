import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 3.25v1.5h10v-1.5H0z" />
    <path d="M9 0v1h2c1.38 0 2.5 1.343 2.5 3S12.38 7 11 7H9v1h2a4 4 0 100-8H9z" />
    <path d="M12 4a2 2 0 11-4 0 2 2 0 114 0z" />
  </svg>
);

export default SvgComponent;