import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 15v4h14v9H2v2h20V15H0zm15 1h3v13h-3V16zM20 0h2v15h-2z" />
    <path fill="#fff" d="M15 16h3v13h-3z" />
  </svg>
);

export default SvgComponent;
