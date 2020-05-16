import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={24} {...props}>
    <path d="M6.364 20.464L22.627 4.201l.708.707L7.07 21.172l-.707-.708z" />
    <path d="M0 14.1V24h9.9l-2.011-2.01H2.01V16.11L0 14.101z" />
    <path d="M2.828 16.929L19.092.665l.707.708L3.536 17.636l-.708-.707zM22.002 17.998L16.5 23.5l-5.502-5.502h1.414l4.088 4.088 4.088-4.088h1.414z" />
    <path d="M6 7c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10H4V7h2z" />
    <path
      d="M3.536 17.636L19.799 1.373 22.627 4.2 6.364 20.464l-2.828-2.828z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
