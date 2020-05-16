import React from "react";

const SvgComponent = (props) => (
  <svg width={42} height={20} {...props}>
    <path d="M0 16h42v4H0v-4zM15 4h1v11h-1zM18 4h1v11h-1z" />
    <path fill="#fff" d="M16 4h2v11h-2z" />
    <path d="M17 0l-5 5 .719.719L17 1.437l4.281 4.282L22 5l-5-5zM24 11h1V0h-1zM27 11h1V0h-1z" />
    <path fill="#fff" d="M25 11h2V0h-2z" />
    <path d="M26 15l-5-5 .719-.719L26 13.562l4.281-4.28L31 10l-5 5z" />
  </svg>
);

export default SvgComponent;
