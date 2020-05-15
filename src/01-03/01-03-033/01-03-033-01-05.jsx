import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 4h13v15H16z" />
    <path fill="#fff" d="M18 6h5v11h-5z" />
    <path d="M14 8H1v2h13V8zM14 6H0V4h14v2z" />
    <path d="M6.594.188L4 1.688 14 19v-6L6.594.187z" />
  </svg>
);

export default SvgComponent;