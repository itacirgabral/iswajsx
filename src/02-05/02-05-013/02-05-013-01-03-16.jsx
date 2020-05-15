import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9.9 0H0v9.9l2.01-2.011V2.01H7.89L9.899 0z" />
    <path d="M5.657 4.243L21.92 20.506l-1.414 1.414L4.243 5.657l1.414-1.414zM17 1l5.5 5.5L17 12v-1.414L21.086 6.5 17 2.414V1z" />
    <path d="M6 17c0-6.075 4.925-11 11-11v1C11.477 7 7 11.477 7 17v2H6v-2z" />
  </svg>
);

export default SvgComponent;