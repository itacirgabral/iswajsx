import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={21} {...props}>
    <path d="M8 6h15v15H8z" />
    <path fill="#fff" d="M10 8h11v11H10z" />
    <path d="M5 0C0 0 0 5 0 5v3h2V5c0-3 3-3 3-3 3 0 3 3 3 3v1h2V5c0-5-5-5-5-5z" />
    <path d="M5 2s-1.077-.009-1.938.625L8 21v-7.75L5 2z" />
  </svg>
);

export default SvgComponent;
