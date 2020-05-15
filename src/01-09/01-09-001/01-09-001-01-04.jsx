import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 17h15v13H5z" />
    <path fill="#fff" d="M7 19h11v9H7z" />
    <path d="M11 0h2v15h-2zM3.5 3.75l-1.719 1L7.72 15H10L3.5 3.75zM1.469 10.625L.062 12.063 3 15h2.813l-4.344-4.375z" />
  </svg>
);

export default SvgComponent;
