import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={21} {...props}>
    <path d="M0 3l3.5 3.5L7 3H0zm1.688.688h3.625L3.5 5.53 1.687 3.688z" />
    <path d="M6.5 0a3.5 3.5 0 00-3.469 3h1.031c.234-1.14 1.23-2 2.438-2A2.5 2.5 0 019 3.5V13c0 2.848-3 8-3 8h7s-3-5.152-3-8V3.5A3.5 3.5 0 006.5 0z" />
    <path d="M10 3l3.5 3.5L17 3h-7zm1.688.688h3.624L13.5 5.53l-1.813-1.843z" />
    <path d="M16.5 0a3.5 3.5 0 00-3.469 3h1.031c.234-1.14 1.23-2 2.438-2A2.5 2.5 0 0119 3.5V13c0 2.848-3 8-3 8h7s-3-5.152-3-8V3.5A3.5 3.5 0 0016.5 0z" />
    <path
      d="M1.688 3.688L3.5 5.53l1.813-1.843H1.688zM11.688 3.688L13.5 5.53l1.813-1.843h-3.626z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
