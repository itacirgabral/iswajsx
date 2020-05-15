import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M2 17h15v13H2z" />
    <path fill="#fff" d="M4 19h11v9H4z" />
    <path d="M16.594 6.406L8 15h2.813L18 7.812l-1.406-1.406z" />
    <path d="M8 0h2v15H8z" />
    <path d="M1.406 6.406L0 7.813 7.188 15H10L1.406 6.406z" />
  </svg>
);

export default SvgComponent;
