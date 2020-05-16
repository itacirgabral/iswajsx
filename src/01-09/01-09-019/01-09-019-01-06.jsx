import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={30} {...props}>
    <path d="M4 17h14v13H4zM3 0h2v15H3zM2 15v10c0 2.03 1 2 1 2v3s-3 .05-3-5V15h2z" />
  </svg>
);

export default SvgComponent;
