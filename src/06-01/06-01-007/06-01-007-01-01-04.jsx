import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v22l15 15 1.406-1.406L2 21.187V5h22V0H0z" />
    <path
      d="M2 5v16.188l14.406 14.406L15 37h1.438l1.406-1.406L3.25 21H6v-2.125c2.278-.513 4-2.717 4-5.375S8.278 8.638 6 8.125V6h18V5H2zm13 32L0 22v1.438L13.594 37H15zM4 7h1v2c2.21 0 4 2.015 4 4.5S7.21 18 5 18v2H4V7zm1 3.5v6c1.38 0 2.5-1.343 2.5-3s-1.12-3-2.5-3z"
      fill="#fff"
    />
    <path d="M4 7v13h1v-2c2.21 0 4-2.015 4-4.5S7.21 9 5 9V7H4zm1 3.5c1.38 0 2.5 1.343 2.5 3s-1.12 3-2.5 3v-6z" />
  </svg>
);

export default SvgComponent;