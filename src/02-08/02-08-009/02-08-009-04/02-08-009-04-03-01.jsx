import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L0 8h2l6-6 6 6h2L8 0zM7 8v11.5a3.5 3.5 0 003.5 3.5 3.48 3.48 0 002.469-1.031L15 19.937V29.5a3.5 3.5 0 003.5 3.5 3.48 3.48 0 002.469-1.031L23 29.937V39a4 4 0 004 4h4a8 8 0 008-8H29v3c0 1.657-.895 3-2 3a2 2 0 01-2-2V25.094l-5.438 5.468A1.498 1.498 0 0118.5 31a1.5 1.5 0 01-1.5-1.5V15.094l-5.438 5.469A1.498 1.498 0 0110.5 21 1.5 1.5 0 019 19.5V8H7z" />
  </svg>
);

export default SvgComponent;
