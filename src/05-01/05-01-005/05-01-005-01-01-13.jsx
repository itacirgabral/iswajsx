import React from "react";

const SvgComponent = (props) => (
  <svg width={49} height={11} {...props}>
    <path d="M49 7H7V3h42v4zM3 7H2V0h1v7z" />
    <path d="M0 8.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" />
  </svg>
);

export default SvgComponent;
