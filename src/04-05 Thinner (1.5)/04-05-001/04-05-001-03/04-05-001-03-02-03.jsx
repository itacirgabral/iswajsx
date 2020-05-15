import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 3.25v1.5h10v-1.5H5z" />
    <path d="M7 4a2 2 0 11-4 0 2 2 0 114 0z" />
    <path d="M4 0a4 4 0 100 8h2V7H4C2.62 7 1.5 5.657 1.5 4S2.62 1 4 1h2V0H4z" />
  </svg>
);

export default SvgComponent;
