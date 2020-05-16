import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={45} {...props}>
    <path d="M14 0v2H6.5a4.5 4.5 0 000 9H10c5.523 0 10 4.477 10 10s-4.477 10-10 10H7a5 5 0 100 10h11v4H9a9 9 0 110-18h3a6 6 0 000-12H7.5a7.5 7.5 0 110-15H14z" />
  </svg>
);

export default SvgComponent;
