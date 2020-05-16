import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={10} {...props}>
    <path d="M6.414.758l2.828 2.828-5.657 5.657L.757 6.415 6.414.758z" />
  </svg>
);

export default SvgComponent;
