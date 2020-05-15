import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 2v4H4v2h4v4h2V8h4V6h-4V2H8zM0 0h2v15H0zM16 0h2v15h-2zM32 0h2v15h-2zM24 2v4h-4v2h4v4h2V8h4V6h-4V2h-2z" />
  </svg>
);

export default SvgComponent;