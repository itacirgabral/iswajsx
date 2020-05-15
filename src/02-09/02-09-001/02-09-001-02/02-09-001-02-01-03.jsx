import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 20l7-7-7-7v14z" />
    <path d="M6 0a6 6 0 00-6 6v3a6 6 0 006 6h10v-4H5a3 3 0 01-3-3V6a4 4 0 014-4h14V0H6z" />
  </svg>
);

export default SvgComponent;
