import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 5h42v4H0V5zM39 14v7.071h1.016v-6.055h6.055V14H39z" />
    <path d="M41.475 17.182l.707-.707 4.243 4.243-.707.707-4.243-4.243zM46 7v7.071h1.016V8.016h6.055V7H46z" />
    <path d="M48.475 10.182l.707-.707 4.243 4.243-.707.707-4.243-4.243zM53-.071V7h1.016V.945h6.055V-.07H53z" />
    <path d="M55.475 3.11l.707-.706 4.243 4.242-.707.708-4.243-4.243z" />
  </svg>
);

export default SvgComponent;