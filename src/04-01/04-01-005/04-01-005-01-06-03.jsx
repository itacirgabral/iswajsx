import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={10} {...props}>
    <path d="M0 5l5 5 .719-.719L1.437 5 5.72.719 5 0 0 5z" />
    <path d="M4 5.5h6v-1H4v1z" />
  </svg>
);

export default SvgComponent;
