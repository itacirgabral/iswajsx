import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M1 14.1V24h9.9l-2.011-2.01H3.01V16.11L1 14.101z" />
    <path d="M5.201 18.385L23.586 0 25 1.414 6.615 19.8l-1.414-1.414zM0 9l5.5-5.5L11 9H9.587L5.5 4.914 1.414 9H.001z" />
    <path d="M16 20C9.925 20 5 15.075 5 9h1c0 5.523 4.477 10 10 10h2v1h-2zM23 18l5.5-5.5L23 7v1.414l4.087 4.086L23 16.586V18z" />
    <path d="M12 2c0 6.075 4.925 11 11 11v-1c-5.523 0-10-4.477-10-10V0h-1v2z" />
  </svg>
);

export default SvgComponent;
