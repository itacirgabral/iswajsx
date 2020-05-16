import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={20} {...props}>
    <path d="M9 5h8v15H9z" />
    <path fill="#fff" d="M10 6h6v13h-6z" />
    <path d="M0 0v3c2.837 0 5.35.736 7 1.875V3h2.375C7.178 1.165 3.798 0 0 0z" />
  </svg>
);

export default SvgComponent;
