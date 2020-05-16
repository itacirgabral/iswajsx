import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={33} {...props}>
    <path d="M15 3v30H0V18h13V3h2z" />
    <path d="M2 20h11v11H2V20z" fill="#fff" />
    <path d="M14.5 0a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z" />
    <path d="M14.5 1.5a3 3 0 110 6 3 3 0 010-6z" fill="#fff" />
  </svg>
);

export default SvgComponent;
