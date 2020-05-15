import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 73V10H8v63h2zM4 73V10H2v63h2z" />
    <path d="M0 .781L7.313 5H0V.781zM10 7v3H8v63H4V10H2V7h8z" fill="#fff" />
    <path d="M2.594 0L12 5.438V7H0V5h7.313L0 .781V0h2.594z" />
  </svg>
);

export default SvgComponent;
