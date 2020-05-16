import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={10} {...props}>
    <path d="M0 5l5 5 .719-.719L1.437 5 5.72.719 5 0 0 5z" />
    <path d="M4 7h6V6H4v1zM4 4h6V3H4v1z" />
  </svg>
);

export default SvgComponent;
