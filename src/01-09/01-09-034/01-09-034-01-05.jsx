import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 7h13v15H12z" />
    <path fill="#fff" d="M14 9h5v11h-5z" />
    <path d="M3 0L1.594 1.406 10 9.812V7L3 0zM0 19v2h10v-2H0z" />
  </svg>
);

export default SvgComponent;
