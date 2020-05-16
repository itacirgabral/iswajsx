import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={22} {...props}>
    <path d="M2 9h15v13H2z" />
    <path fill="#fff" d="M4 11h11v9H4z" />
    <path d="M2 0L.594 1.406 6.187 7H9L2 0z" />
  </svg>
);

export default SvgComponent;
