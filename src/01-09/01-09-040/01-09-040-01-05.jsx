import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={15} {...props}>
    <path d="M16 0h13v15H16z" />
    <path fill="#fff" d="M18 2h5v11h-5z" />
    <path d="M0 0v2h14V0H0zM6.406 2L14 9.563V6.75L9.25 2H6.406z" />
  </svg>
);

export default SvgComponent;
