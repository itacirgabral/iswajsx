import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={17} {...props}>
    <path d="M15 5a5 5 0 015 5v2a5 5 0 01-5 5H3v-3h12a3 3 0 003-3V9a3 3 0 00-3-3H6V5h9z" />
    <path d="M6 0L.5 5.5 6 11V9.5l-4-4 4-4V0z" />
  </svg>
);

export default SvgComponent;
