import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={27} {...props}>
    <path d="M3 14h15v13H3z" />
    <path fill="#fff" d="M5 16h6v9H5z" />
    <path d="M5.969-.031l-1.5 1.5L15 12h3L5.969-.031z" />
    <path d="M1.094 5.844L.406 7.719 12.156 12H18L1.094 5.844z" />
  </svg>
);

export default SvgComponent;
