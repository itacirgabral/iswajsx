import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M2 11h15v15H2z" />
    <path fill="#fff" d="M4 13h6v11H4z" />
    <path d="M6.406.406L4.97 1.812 14.187 11H17L6.406.406zM1.406.406L-.03 1.812 9.188 11H12L1.406.406zM23.375 11.813L17 18.186V21l7.781-7.781-1.406-1.406z" />
  </svg>
);

export default SvgComponent;