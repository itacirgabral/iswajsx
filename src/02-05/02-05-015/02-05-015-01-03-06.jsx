import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={24} {...props}>
    <path d="M28 14.1V24h-9.9l2.011-2.01h5.878V16.11L28 14.101z" />
    <path d="M23.799 18.385L5.414 0 4 1.414 22.385 19.8l1.414-1.414zM29 9l-5.5-5.5L18 9h1.413L23.5 4.914 27.586 9H29z" />
    <path d="M13 20c6.075 0 11-4.925 11-11h-1c0 5.523-4.477 10-10 10h-2v1h2zM6 18L.5 12.5 6 7v1.414L1.913 12.5 6 16.586V18z" />
    <path d="M17 2c0 6.075-4.925 11-11 11v-1c5.523 0 10-4.477 10-10V0h1v2z" />
  </svg>
);

export default SvgComponent;
