import React from "react";

const SvgComponent = (props) => (
  <svg width={26} height={21} {...props}>
    <path d="M6 6h15v15H6z" />
    <path d="M24.594.594L26 2l-5 5V6h-1.813L24.595.594zM1.406 9.594L6 14.188V17l-6-6 1.406-1.406z" />
  </svg>
);

export default SvgComponent;
