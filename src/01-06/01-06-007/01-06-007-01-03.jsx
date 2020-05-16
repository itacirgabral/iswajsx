import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={30} {...props}>
    <path d="M0 15h15v15H0zM2 4h2v11H2zM6 0h2v15H6zM10 4h2v11h-2z" />
  </svg>
);

export default SvgComponent;
