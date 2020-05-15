import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 11h15v15H6z" />
    <path fill="#fff" d="M8 13h6v11H8z" />
    <path d="M8 0v11h2V0H8zM1.625 4.625L.219 6.063 6 11.813V11h2L1.625 4.625z" />
  </svg>
);

export default SvgComponent;