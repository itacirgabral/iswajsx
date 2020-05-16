import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={26} {...props}>
    <path d="M0 13h15v13H0zM7 0v7h2V2h4v9h2V0H7z" />
    <path fill="#fff" d="M2 15h11v9H2z" />
    <path d="M4 15v6h2v-6H4zm5 0v6h2v-6H9z" />
  </svg>
);

export default SvgComponent;
