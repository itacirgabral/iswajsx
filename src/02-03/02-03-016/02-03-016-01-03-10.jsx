import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={25} {...props}>
    <path d="M17.636 3.536L1.373 19.799l-.708-.707L16.93 2.828l.707.708z" />
    <path d="M24 9.9V0h-9.9l2.011 2.01h5.878V7.89L24 9.899z" />
    <path d="M21.172 7.071L4.908 23.335l-.707-.708L20.464 6.364l.708.707zM21.002 18.998L15.5 24.5l-5.502-5.502h1.414l4.088 4.088 4.088-4.088h1.414z" />
    <path d="M5 8c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10H3V8h2z" />
    <path
      d="M20.464 6.364L4.201 22.627 1.373 19.8 17.636 3.536l2.828 2.828z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
