import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 15h15v15H9z" />
    <path fill="#fff" d="M11 17h6v11h-6z" />
    <path d="M22 3h2v12h-2zM17 0h2v15h-2zM0 22h9v2H0z" />
  </svg>
);

export default SvgComponent;
