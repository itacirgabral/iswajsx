import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 7h15v15H10z" />
    <path fill="#fff" d="M12 9h11v11H12z" />
    <path d="M3 0L1.594 1.406 10 9.812V7L3 0zM0 19v2h10v-2H0z" />
  </svg>
);

export default SvgComponent;