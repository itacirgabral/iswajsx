import React from "react";

const SvgComponent = (props) => (
  <svg width={30} height={28} {...props}>
    <path d="M11 22l5.5 5.5L22 22H11zM9.9 28L0 18.1V28h9.9z" />
    <path d="M2.828 20.929L23.335.423l.707.707L3.536 21.636l-.708-.707z" />
    <path d="M6 11c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10H4v-1h2z" />
    <path d="M6.364 24.464L26.87 3.958l.707.707L7.071 25.172l-.707-.708zM19 14l5.5 5.5L30 14H19z" />
    <path d="M14 3c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10h-2V3h2z" />
    <path
      d="M3.536 21.636L24.042 1.13l2.828 2.828L6.364 24.464l-2.828-2.828z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
