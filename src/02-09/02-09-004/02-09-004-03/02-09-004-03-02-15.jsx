import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 0l7 7-7 7V0zm1 2.438v9.124L19.594 7 15 2.437z" />
    <path d="M14 6v2H6.5a4.5 4.5 0 000 9H10c5.523 0 10 4.477 10 10s-4.477 10-10 10H7a5 5 0 100 10h11v4H9a9 9 0 110-18h3a6 6 0 000-12H7.5a7.5 7.5 0 110-15H14z" />
    <path d="M15 2.438L19.594 7 15 11.563V2.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
