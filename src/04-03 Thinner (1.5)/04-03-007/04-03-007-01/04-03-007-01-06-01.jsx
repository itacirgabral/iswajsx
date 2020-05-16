import React from "react";

const SvgComponent = (props) => (
  <svg width={6} height={10} {...props}>
    <path d="M3 0a3 3 0 013 3c0 2.67-.97 5.104-2.563 7L2 9.156a9.395 9.395 0 001.906-3.312C3.616 5.937 3.321 6 3 6a3 3 0 110-6z" />
  </svg>
);

export default SvgComponent;
