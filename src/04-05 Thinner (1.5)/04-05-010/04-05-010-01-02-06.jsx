import React from "react";

const SvgComponent = (props) => (
  <svg width={7} height={7} {...props}>
    <path d="M7 7V1.344H6V6H1.344v1H7z" />
    <path d="M1 .281L.281 1l3.531 3.531.72-.718L1 .28z" />
  </svg>
);

export default SvgComponent;
