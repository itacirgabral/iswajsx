import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={15} {...props}>
    <path d="M3 11h1V0H3zM6 11h1V0H6z" />
    <path fill="#fff" d="M4 11h2V0H4z" />
    <path d="M5 15l-5-5 .719-.719L5 13.562l4.281-4.28L10 10l-5 5z" />
  </svg>
);

export default SvgComponent;
