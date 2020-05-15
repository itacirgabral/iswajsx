import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 .563l-6 6.03L1.406 8 6 3.437l5 5.157 5-5.156 5 5.156 5-5.156L30.594 8 32 6.594 26 .562l-5 5.032-5-5.032-5 5.032L6 .562z" />
    <path d="M6 6.563l-6 6.03L1.406 14 6 9.437l5 5.157 5-5.156 5 5.156 5-5.156L30.594 14 32 12.594l-6-6.031-5 5.03-5-5.03-5 5.03-5-5.03z" />
  </svg>
);

export default SvgComponent;
