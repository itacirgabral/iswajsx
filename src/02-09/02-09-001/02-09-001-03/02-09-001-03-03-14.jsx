import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={25} {...props}>
    <path d="M8 0L0 8h2l6-6 6 6h2L8 0zM9 8v8a5 5 0 005 5h15v4H15a8 8 0 01-8-8V8h2z" />
  </svg>
);

export default SvgComponent;
