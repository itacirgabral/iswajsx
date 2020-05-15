import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 17h15v13H0z" />
    <path fill="#fff" d="M2 19h11v9H2z" />
    <path d="M13 0h2v15h-2zM2.406 4.406L.97 5.813 10.188 15H13L2.406 4.406zM21.375 15.813L16 21.186V24l6.781-6.781-1.406-1.407z" />
  </svg>
);

export default SvgComponent;