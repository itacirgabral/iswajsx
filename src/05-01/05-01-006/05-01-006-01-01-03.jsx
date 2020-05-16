import React from "react";

const SvgComponent = (props) => (
  <svg width={42} height={20} {...props}>
    <path d="M0 16h42v4H0v-4zM19 11h1V0h-1zM22 11h1V0h-1z" />
    <path fill="#fff" d="M20 11h2V0h-2z" />
    <path d="M21 15l-5-5 .719-.719L21 13.562l4.281-4.28L26 10l-5 5z" />
  </svg>
);

export default SvgComponent;
