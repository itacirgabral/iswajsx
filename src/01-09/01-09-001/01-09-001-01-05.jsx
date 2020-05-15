import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 17h15v13H0z" />
    <path fill="#fff" d="M2 19h6v9H2z" />
    <path d="M7 0h2v15H7zM16.5 3.75l1.719 1L12.28 15H10l6.5-11.25zM18.531 10.625L14.188 15H17l2.938-2.938-1.407-1.437z" />
  </svg>
);

export default SvgComponent;