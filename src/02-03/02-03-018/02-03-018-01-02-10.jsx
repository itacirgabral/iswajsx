import React from "react";

const SvgComponent = (props) => (
  <svg width={30} height={28} {...props}>
    <path d="M14 5c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10h-2V5h2z" />
    <path d="M26.464 6.364L5.958 26.87l.707.707L27.172 7.071l-.708-.707zM18.998 15.998h11.004L24.5 21.5l-5.502-5.502zm2.408.994l3.094 3.094 3.071-3.072-6.165-.022z" />
    <path d="M20.1 0H30v9.9L20.1 0zm2.431 1.016l6.453 6.453V1.016H22.53z" />
    <path d="M22.929 2.828L2.423 23.335l.707.707L23.636 3.536l-.707-.708z" />
    <path
      d="M22.531 1.016h6.453V7.47L22.53 1.016zM21.406 16.992l6.165.022-3.071 3.072-3.094-3.094z"
      fill="#fff"
    />
    <path d="M17 24c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2z" />
    <path
      d="M23.636 3.536L3.13 24.042l2.828 2.828L26.464 6.364l-2.828-2.828z"
      fill="#fff"
    />
    <path d="M6.002 19.002V7.998L.5 13.5l5.502 5.502zm-.994-2.408L1.914 13.5l3.072-3.071.022 6.165z" />
    <path d="M5.008 16.594l-.022-6.165L1.914 13.5l3.094 3.094z" fill="#fff" />
  </svg>
);

export default SvgComponent;
