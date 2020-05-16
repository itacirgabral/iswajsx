import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={35} {...props}>
    <path d="M28 0v11.5a3.5 3.5 0 01-3.5 3.5 3.48 3.48 0 01-2.469-1.031L20 11.938V21.5a3.5 3.5 0 01-3.5 3.5 3.48 3.48 0 01-2.469-1.031L12 21.937V31a4 4 0 01-4 4 8 8 0 01-8-8h2a6 6 0 006 6 2 2 0 002-2V17.094l5.438 5.468A1.5 1.5 0 0018 21.5l-.001-14.405 5.438 5.468A1.5 1.5 0 0026 11.5L25.999.001h2z" />
  </svg>
);

export default SvgComponent;
