import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={21} {...props}>
    <path d="M15 0v2l5 5-5 5v2l7-7-7-7z" />
    <path d="M15 6v2H6a4 4 0 00-4 4v2a3 3 0 003 3h15v4H6a6 6 0 01-6-6v-3a6 6 0 016-6h9z" />
  </svg>
);

export default SvgComponent;
