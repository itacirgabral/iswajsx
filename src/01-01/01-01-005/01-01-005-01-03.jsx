import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={30} {...props}>
    <path d="M0 15v4h14v9H2v2h20V15H0zM14 0h2v15h-2z" />
  </svg>
);

export default SvgComponent;
