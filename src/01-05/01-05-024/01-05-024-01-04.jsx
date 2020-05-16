import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={27} {...props}>
    <path d="M0 0v27h12V0L6 6 0 0z" />
    <path d="M2 4.813V9H0v3h2v13h8V12h2V9h-2V4.812l-4 4-4-4z" fill="#fff" />
    <path d="M18.375 11.813L12 18.186V21l7.781-7.781-1.406-1.406z" />
  </svg>
);

export default SvgComponent;
