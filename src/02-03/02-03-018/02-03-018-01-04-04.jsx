import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 24l5.5 5.5L22 24H11zM9.9 30L0 20.1V30h9.9z" />
    <path d="M2.828 22.929L23.335 2.423l.707.707L3.536 23.636l-.708-.707z" />
    <path d="M6 13c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10H4v-1h2z" />
    <path d="M6.364 26.464L26.87 5.958l.707.707L7.071 27.172l-.707-.708zM14 11L8.5 5.5 14 0v11z" />
    <path d="M25 16c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2z" />
    <path
      d="M3.536 23.636L24.042 3.13l2.828 2.828L6.364 26.464l-2.828-2.828z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
