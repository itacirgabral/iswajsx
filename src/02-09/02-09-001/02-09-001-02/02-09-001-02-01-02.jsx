import React from "react";

const SvgComponent = (props) => (
  <svg width={27} height={21} {...props}>
    <path d="M0 13h16l-8 8-8-8zM13 0a7 7 0 00-7 7v6h4V6a4 4 0 014-4h13V0H13z" />
  </svg>
);

export default SvgComponent;
