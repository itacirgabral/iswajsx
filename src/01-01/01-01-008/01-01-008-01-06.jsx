import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={26} {...props}>
    <path d="M0 0v7h2V2h4v8h2V0H0zM22 18a8 8 0 11-16 0 8 8 0 1116 0z" />
  </svg>
);

export default SvgComponent;
