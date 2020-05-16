import React from "react";

const SvgComponent = (props) => (
  <svg width={61} height={22} {...props}>
    <path d="M61 5H19v4h42V5zM22 14v7.071h-1.016v-6.055h-6.055V14H22z" />
    <path d="M19.525 17.182l-.707-.707-4.243 4.243.707.707 4.243-4.243zM15 7v7.071h-1.016V8.016H7.929V7H15z" />
    <path d="M12.525 10.182l-.707-.707-4.243 4.243.707.707 4.243-4.243zM8-.071V7H6.984V.945H.929V-.07H8z" />
    <path d="M5.525 3.11l-.707-.706L.575 6.646l.707.708L5.525 3.11z" />
  </svg>
);

export default SvgComponent;
