import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={60} {...props}>
    <path d="M10 9v51H2V9h8z" />
    <path d="M0 .781L7.313 5H0V.781zM10 7v2H2V7h8z" fill="#fff" />
    <path d="M2.594 0L12 5.438V7H0V5h7.313L0 .781V0h2.594z" />
  </svg>
);

export default SvgComponent;
