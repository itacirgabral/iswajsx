import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 15h15v15H4z" />
    <path fill="#fff" d="M6 17h6v11H6z" />
    <path d="M17 0h2v15h-2zM.78 7.969L-.062 9.78 11.125 15h4.718L.781 7.969z" />
  </svg>
);

export default SvgComponent;
