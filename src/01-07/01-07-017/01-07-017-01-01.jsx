import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M2 15h15v15H2z" />
    <path fill="#fff" d="M4 17h11v11H4z" />
    <path d="M9 0v15h2V0H9zM1.938 7.938L.5 9.344 6.188 15H9L1.937 7.937z" />
  </svg>
);

export default SvgComponent;