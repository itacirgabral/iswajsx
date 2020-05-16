import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={15} {...props}>
    <path d="M0 0h15v15H0z" />
    <path d="M9 2v11H2V9h5V6H2V2h7z" fill="#fff" />
  </svg>
);

export default SvgComponent;
