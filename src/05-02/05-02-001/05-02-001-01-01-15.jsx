import React from "react";

const SvgComponent = (props) => (
  <svg width={30} height={68} {...props}>
    <path d="M28 0v38.594l-28 28L1.406 68 30 39.406V0h-2z" />
    <path
      d="M27 0v38.188L0 65.156v1.438l28-28V0h-1zm3 39.406L1.406 68h1.438L30 40.844v-1.438z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
