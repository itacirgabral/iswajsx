import React from "react";

const SvgComponent = (props) => (
  <svg width={13} height={21} {...props}>
    <path d="M0 3l3.5 3.5L7 3H6L3.5 5.5 1 3H0z" />
    <path d="M6.5 0a3.5 3.5 0 00-3.469 3h1.031c.234-1.14 1.23-2 2.438-2A2.5 2.5 0 019 3.5V13c0 2.848-3 8-3 8h7s-3-5.152-3-8V3.5A3.5 3.5 0 006.5 0z" />
  </svg>
);

export default SvgComponent;
