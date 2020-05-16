import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={19} {...props}>
    <path d="M0 4h15v15H0z" />
    <path
      d="M11.844 1c-.281.047-.844.25-.844 1v2h3V2s0-1-1-1h-1s-.063-.016-.156 0zM2 6v11h6V6H2z"
      fill="#fff"
    />
    <path
      d="M15 4V2s0 2 0 0-2-2-2-2h-1s2 0 0 0-2 2-2 2v2h1V2s0 1 0 0 1-1 1-1h1s-1 0 0 0 1 1 1 1v2h1z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgComponent;
