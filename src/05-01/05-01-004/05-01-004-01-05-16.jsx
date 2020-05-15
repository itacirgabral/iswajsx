import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 16h42v4H16v-4zM0 12v7.071h1.016v-6.055h6.055V12H0z" />
    <path d="M2.475 15.182l.707-.707 4.243 4.243-.707.707-4.243-4.243zM15 15V7.929h-1.016v6.055H7.929V15H15z" />
    <path d="M12.525 11.818l-.707.707-4.243-4.243.707-.707 4.243 4.243zM12 0v7.071h1.016V1.016h6.055V0H12z" />
    <path d="M14.475 3.182l.707-.707 4.243 4.243-.707.707-4.243-4.243z" />
  </svg>
);

export default SvgComponent;
