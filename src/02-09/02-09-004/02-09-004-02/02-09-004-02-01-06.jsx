import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 0v13L8.5 6.5 15 0z" />
    <path d="M20 6a6 6 0 010 12h-8a2 2 0 00-2 2c0 .552.232 1.044.594 1.406l3.281 2.813A3.994 3.994 0 0115 27a7 7 0 01-7 7H0v-4h10a3 3 0 003-3c0-.536-.22-1.016-.563-1.375l-3.28-2.781A4.01 4.01 0 018 20a5 5 0 015-5h7a4 4 0 100-8h-5V6h5z" />
  </svg>
);

export default SvgComponent;
