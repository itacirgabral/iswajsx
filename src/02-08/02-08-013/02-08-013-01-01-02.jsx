import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M36 7l-7-7-7 7h14zM30 7v12a4 4 0 01-4 4h-2c-3.866 0-7-2.686-7-6h7c0 2.21.895 4 2 4a2 2 0 002-2V7h2z" />
    <path d="M39 13v1H0v-1h39zM21 7l-7-7-7 7h14z" />
    <path d="M15 7v12a4 4 0 01-4 4H9c-3.866 0-7-2.686-7-6h7c0 2.21.895 4 2 4a2 2 0 002-2V7h2z" />
  </svg>
);

export default SvgComponent;