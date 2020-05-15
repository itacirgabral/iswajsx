import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 0C1.784 0 0 1.784 0 4s1.784 4 4 4h7c2.216 0 4-1.784 4-4s-1.784-4-4-4H4zm0 1.5v5A2.495 2.495 0 011.5 4c0-1.385 1.115-2.5 2.5-2.5zm1 0h2v5H5v-5zm3 0h2v5H8v-5zm3 0c1.385 0 2.5 1.115 2.5 2.5S12.385 6.5 11 6.5v-5z" />
  </svg>
);

export default SvgComponent;