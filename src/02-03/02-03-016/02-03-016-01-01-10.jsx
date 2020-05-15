import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M21.172 7.071L4.908 23.335l-.707-.708L20.464 6.364l.708.707zM10 19l5.5 5.5L21 19H10z" />
    <path d="M14.1 0L24 9.9V0h-9.9z" />
    <path d="M17.636 3.536L1.373 19.799l-.708-.707L16.93 2.828l.707.708z" />
    <path d="M5 8c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10H3V8h2z" />
    <path
      d="M20.464 6.364L4.201 22.627 1.373 19.8 17.636 3.536l2.828 2.828z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;