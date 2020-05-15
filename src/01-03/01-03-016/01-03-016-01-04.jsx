import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 17h15v13H0z" />
    <path fill="#fff" d="M2 19h11v9H2z" />
    <path d="M13 3h2v12h-2zM10 0H8v15h2V0zM21.375 15.813L16 21.186V24l6.781-6.781-1.406-1.407z" />
  </svg>
);

export default SvgComponent;
