import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 13h15v13H6z" />
    <path fill="#fff" d="M8 15h6v9H8z" />
    <path d="M8 0v11h2V0H8zM1.625 4.625L.219 6.063 5.187 11H8L1.625 4.625z" />
  </svg>
);

export default SvgComponent;
