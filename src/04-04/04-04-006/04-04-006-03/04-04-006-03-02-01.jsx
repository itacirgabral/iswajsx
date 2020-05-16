import React from "react";

const SvgComponent = (props) => (
  <svg width={7} height={10} {...props}>
    <path d="M.5 9.5h6v-9h-6v9zm2-1v-7h2v7h-2z" />
  </svg>
);

export default SvgComponent;
