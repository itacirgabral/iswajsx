import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={23} {...props}>
    <path d="M9 0a4 4 0 00-4 4v1h1V4a3 3 0 013-3h1c1.657 0 3 1.79 3 4v9c0 3.283-4 9-4 9h10s-4-5.717-4-9V5a5 5 0 00-5-5H9z" />
    <path d="M0 5l5.5 5.5L11 5H0zm2.438 1h6.124L5.5 9.063 2.437 6z" />
  </svg>
);

export default SvgComponent;
