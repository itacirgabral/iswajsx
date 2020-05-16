import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={19} {...props}>
    <path d="M14 4h15v15H14z" />
    <path fill="#fff" d="M16 6h11v11H16z" />
    <path d="M14 8H1v2h13V8zM14 6H0V4h14v2z" />
    <path d="M6.594.188L4 1.688 14 19v-6L6.594.187z" />
  </svg>
);

export default SvgComponent;
