import React from "react";

const SvgComponent = (props) => (
  <svg width={25} height={26} {...props}>
    <path d="M2 13h15v13H2z" />
    <path fill="#fff" d="M4 15h6v9H4z" />
    <path d="M6.406.406L4.97 1.812 14.187 11H17L6.406.406zM1.406.406L-.03 1.812 9.188 11H12L1.406.406zM23.375 11.813L18 17.186V20l6.781-6.781-1.406-1.406z" />
  </svg>
);

export default SvgComponent;
