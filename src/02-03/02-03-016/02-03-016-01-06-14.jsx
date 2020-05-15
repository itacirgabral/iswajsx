import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6.364 20.464L22.627 4.201l.708.707L7.07 21.172l-.707-.708z" />
    <path d="M0 14.1V24h9.9l-2.011-2.01H2.01V16.11L0 14.101z" />
    <path d="M2.828 16.929L19.092.665l.707.708L3.536 17.636l-.708-.707zM6.002 1.998L.5 7.5l5.502 5.502v-1.414L1.914 7.5l4.088-4.088V1.998z" />
    <path d="M17 18c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2z" />
    <path
      d="M3.536 17.636L19.799 1.373 22.627 4.2 6.364 20.464l-2.828-2.828z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;