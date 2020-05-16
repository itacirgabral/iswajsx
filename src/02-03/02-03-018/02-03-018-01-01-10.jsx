import React from "react";

const SvgComponent = (props) => (
  <svg width={30} height={28} {...props}>
    <path d="M19 16l5.5 5.5L30 16H19zM30 9.9L20.1 0H30v9.9z" />
    <path d="M22.929 2.828L2.423 23.335l.707.707L23.636 3.536l-.707-.708z" />
    <path d="M14 5c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10h-2V5h2z" />
    <path d="M26.464 6.364L5.958 26.87l.707.707L27.172 7.071l-.708-.707zM6 19L.5 13.5 6 8v11z" />
    <path d="M17 24c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2z" />
    <path
      d="M23.636 3.536L3.13 24.042l2.828 2.828L26.464 6.364l-2.828-2.828z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
