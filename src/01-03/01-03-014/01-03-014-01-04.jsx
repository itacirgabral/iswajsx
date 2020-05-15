import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 0h13v15H16z" />
    <path fill="#fff" d="M18 2h9v11h-9z" />
    <path d="M14 2L.469 5.625 1 7.563l13-3.47V2zM14 2H0V0h14v2zM2.938 9.969l-.532 1.937L14 15v-2.094L2.937 9.97z" />
  </svg>
);

export default SvgComponent;