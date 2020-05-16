import React from "react";

const SvgComponent = (props) => (
  <svg width={32} height={9} {...props}>
    <path d="M6 .563l-6 6.03L1.406 8 6 3.437l5 4.97 5-4.97 5 4.97 5-4.97L30.594 8 32 6.594 26 .562l-5 5.032-5-5.032-5 5.032L6 .562z" />
  </svg>
);

export default SvgComponent;
