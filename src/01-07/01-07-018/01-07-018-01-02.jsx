import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M2 15h15v15H2z" />
    <path fill="#fff" d="M4 17h6v11H4z" />
    <path d="M9 0v15h2V0H9zM5 6v9h2V6H5z" />
  </svg>
);

export default SvgComponent;
