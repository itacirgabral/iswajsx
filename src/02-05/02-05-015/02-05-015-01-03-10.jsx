import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M28 9.9V0h-9.9l2.011 2.01h5.878V7.89L28 9.899z" />
    <path d="M23.799 5.615L5.414 24 4 22.586 22.385 4.2l1.414 1.414zM29 15l-5.5 5.5L18 15h1.413l4.087 4.086L27.586 15H29z" />
    <path d="M13 4c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10h-2V4h2zM6 6L.5 11.5 6 17v-1.414L1.913 11.5 6 7.414V6z" />
    <path d="M17 22c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2z" />
  </svg>
);

export default SvgComponent;
