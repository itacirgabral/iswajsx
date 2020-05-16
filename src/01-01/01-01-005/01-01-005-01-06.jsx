import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={30} {...props}>
    <path d="M0 15v4h12v-4H0zm14 0v15h8V15h-8zM2 28v2h10v-2H2zM14 0h2v13h-2z" />
  </svg>
);

export default SvgComponent;
