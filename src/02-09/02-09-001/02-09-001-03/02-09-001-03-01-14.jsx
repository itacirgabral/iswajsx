import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 8L8 0 0 8h16zM9 8v8a5 5 0 005 5h15v4H15a8 8 0 01-8-8V8h2z" />
  </svg>
);

export default SvgComponent;
