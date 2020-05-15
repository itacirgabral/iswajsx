import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 15v4h12v-4H0zm14 0v15h8V15h-8zM2 28v2h10v-2H2zM20 0h2v13h-2z" />
    <path fill="#fff" d="M15 16h6v13h-6z" />
  </svg>
);

export default SvgComponent;
