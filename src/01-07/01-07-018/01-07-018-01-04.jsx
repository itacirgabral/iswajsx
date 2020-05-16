import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={30} {...props}>
    <path d="M2 17h15v13H2z" />
    <path fill="#fff" d="M4 19h11v9H4z" />
    <path d="M9 0v15h2V0H9zM5 6v9h2V6H5z" />
  </svg>
);

export default SvgComponent;
