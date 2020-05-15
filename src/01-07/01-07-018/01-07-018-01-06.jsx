import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M2 17h15v13H2zM8 0v15h2V0H8zM12 6v9h2V6h-2z" />
  </svg>
);

export default SvgComponent;