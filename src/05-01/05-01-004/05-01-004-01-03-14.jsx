import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 11h42V7H15v4zM5 15V7.929h1.016v6.055h6.055V15H5z" />
    <path d="M7.475 11.818l.707.707 4.243-4.243-.707-.707-4.243 4.243zM8 0v7.071H6.984V1.016H.929V0H8z" />
    <path d="M5.525 3.182l-.707-.707L.575 6.718l.707.707 4.243-4.243z" />
  </svg>
);

export default SvgComponent;
