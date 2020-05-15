import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M38 7v2H7V7h31zM19.5 9.5L25 15H14l5.5-5.5zm0 1.406L16.406 14h6.188L19.5 10.906zM7 15L0 8l7-7v14zm-1-2.438V3.438L1.437 8 6 12.563z" />
    <path
      d="M6 12.563L1.437 8 6 3.437v9.126zM19.5 10.938L22.563 14h-6.125l3.062-3.063z"
      fill="#fff"
    />
    <path d="M13 0v15a2 2 0 004 0h5c0 2.21-2.239 4-5 4s-5-1.79-5-4V0h1zM32.5 9.5L38 15H27l5.5-5.5zm0 1.406L29.406 14h6.188L32.5 10.906z" />
    <path d="M32.5 10.938L35.563 14h-6.126l3.063-3.063z" fill="#fff" />
    <path d="M26 0v15a2 2 0 004 0h5c0 2.21-2.239 4-5 4s-5-1.79-5-4V0h1z" />
  </svg>
);

export default SvgComponent;
