import React from "react";

const SvgComponent = (props) => (
  <svg width={25} height={26} {...props}>
    <path d="M10 11h15v15H10zM4.938 3.094L3.5 4.5 10 11h2.813L4.936 3.094z" />
    <path d="M7.094.281L5.687 1.687 15 11h2.813L7.092.281zM0 18h10v2H0z" />
  </svg>
);

export default SvgComponent;
