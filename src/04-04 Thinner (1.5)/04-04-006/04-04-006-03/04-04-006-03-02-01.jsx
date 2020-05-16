import React from "react";

const SvgComponent = (props) => (
  <svg width={7} height={10} {...props}>
    <path d="M.5.5v9h6v-9h-6zm1.5 1h3v7H2v-7z" />
  </svg>
);

export default SvgComponent;
