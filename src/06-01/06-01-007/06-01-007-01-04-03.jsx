import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11.5 26a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" fill="#fff" />
    <path d="M0 0v22l15 15 1.406-1.406L2 21.187V5h22V0H0z" />
    <path
      d="M2 5v16.188l14.406 14.406L15 37h1.438l1.406-1.406L3 20.75V6h21V5H2zm13 32L0 22v1.438L13.594 37H15z"
      fill="#fff"
    />
    <path d="M11.5 27a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
  </svg>
);

export default SvgComponent;
