import React from "react";

const SvgComponent = (props) => (
  <svg width={25} height={22} {...props}>
    <path d="M12 7h13v15H12z" />
    <path fill="#fff" d="M14 9h9v11h-9z" />
    <path d="M3 0L1.594 1.406 10 9.812V7L3 0zM0 19v2h10v-2H0z" />
  </svg>
);

export default SvgComponent;
