import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 2h42v4H0V2zM39 11v7.071h1.016v-6.055h6.055V11H39z" />
    <path d="M41.475 14.182l.707-.707 4.243 4.243-.707.707-4.243-4.243zM53 14V6.929h-1.016v6.055h-6.055V14H53z" />
    <path d="M50.525 10.818l-.707.707-4.243-4.243.707-.707 4.243 4.243zM50 0v7.071h1.016V1.016h6.055V0H50z" />
    <path d="M52.475 3.182l.707-.707 4.243 4.243-.707.707-4.243-4.243z" />
  </svg>
);

export default SvgComponent;
