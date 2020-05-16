import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={30} {...props}>
    <path d="M12 11L6.5 5.5 12 0v11zM28 9.9L18.1 0H28v9.9z" />
    <path d="M20.929 2.828L.423 23.335l.707.707L21.636 3.536l-.707-.708z" />
    <path d="M23 16c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2zM9 24l5.5 5.5L20 24H9z" />
    <path d="M24.464 6.364L3.958 26.87l.707.707L25.172 7.071l-.708-.707z" />
    <path d="M4 13c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10H2v-1h2z" />
    <path
      d="M21.636 3.536L1.13 24.042l2.828 2.828L24.464 6.364l-2.828-2.828z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
