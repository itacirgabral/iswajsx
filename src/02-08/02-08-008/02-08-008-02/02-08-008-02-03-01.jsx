import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={29} {...props}>
    <path d="M8 0L0 8h2l6-6 6 6h2L8 0zM7 8v17a4 4 0 004 4h4a8 8 0 008-8H13v3c0 1.657-.895 3-2 3a2 2 0 01-2-2V8H7z" />
  </svg>
);

export default SvgComponent;
