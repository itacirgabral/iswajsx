import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={26} {...props}>
    <path d="M6 11h15v15H6zM0 0v7h2V2h4v9h2V0H0z" />
    <path d="M11.5 17a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill="#fff" />
  </svg>
);

export default SvgComponent;
