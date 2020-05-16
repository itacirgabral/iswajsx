import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={27} {...props}>
    <path d="M3 12h15v15H3z" />
    <path fill="#fff" d="M5 14h6v11H5z" />
    <path d="M5.969-.031l-1.5 1.5L15 12h3L5.969-.031z" />
    <path d="M1.094 5.844L.406 7.719 12.156 12H18L1.094 5.844z" />
  </svg>
);

export default SvgComponent;
