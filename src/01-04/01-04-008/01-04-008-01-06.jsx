import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={15} {...props}>
    <path d="M15 0v15h8V0h-8zM0 0h13v4H0z" />
    <path d="M20 10h-5V7h5v3z" fill="#fff" />
  </svg>
);

export default SvgComponent;
