import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={33} {...props}>
    <path d="M4 3v30h15V18H6V3H4z" />
    <path d="M17 20H6v11h11V20z" fill="#fff" />
    <path d="M4.5 0a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
  </svg>
);

export default SvgComponent;
