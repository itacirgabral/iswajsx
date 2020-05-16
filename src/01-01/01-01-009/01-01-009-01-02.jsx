import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={26} {...props}>
    <path d="M0 11h15v15H0zM7 0v7h2V2h4v9h2V0H7z" />
    <path fill="#fff" d="M2 13h6v11H2z" />
    <path d="M4 13h2v6H4z" />
  </svg>
);

export default SvgComponent;
