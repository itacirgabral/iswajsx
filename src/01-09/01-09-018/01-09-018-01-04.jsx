import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 17h15v13H0z" />
    <path fill="#fff" d="M2 19h11v9H2z" />
    <path d="M13 0h2v15h-2zM21.375 17.813L16 23.188V26l6.781-6.781-1.406-1.407z" />
  </svg>
);

export default SvgComponent;
