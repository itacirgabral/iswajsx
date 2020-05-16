import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={26} {...props}>
    <path d="M0 13h15v13H0z" />
    <path fill="#fff" d="M2 15h11v9H2z" />
    <path d="M7 0v7h2V2h4v9h2V0H7zM9.5 17a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
  </svg>
);

export default SvgComponent;
