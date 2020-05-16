import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={37} {...props}>
    <path
      d="M10.5 26a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM9 31h2v1H9v-1z"
      fill="#fff"
    />
    <path d="M0 0v22l15 15 1.406-1.406L2 21.187V5h22V0H0z" />
    <path
      d="M2 5v16.188l14.406 14.406L15 37h1.438l1.406-1.406L3 20.75V6h21V5H2zm13 32L0 22v1.438L13.594 37H15z"
      fill="#fff"
    />
    <path
      d="M10.5 28a3.425 3.425 0 012.469 1.031c.316.317.573.675.75 1.094.177.419.281.892.281 1.375s-.104.956-.281 1.375a3.425 3.425 0 01-.75 1.094 3.425 3.425 0 01-1.094.75A3.556 3.556 0 0110.5 35a3.425 3.425 0 01-2.469-1.031 3.425 3.425 0 01-.75-1.094A3.556 3.556 0 017 31.5a3.425 3.425 0 011.031-2.469 3.425 3.425 0 011.094-.75A3.556 3.556 0 0110.5 28z"
      fill="#fff"
    />
    <path d="M10.5 27a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 1.5a3 3 0 110 6 3 3 0 010-6z" />
  </svg>
);

export default SvgComponent;
