import React from "react";

const SvgComponent = (props) => (
  <svg width={52} height={9} {...props}>
    <path d="M0 4h42V0H0v4zM44 9V1.929h1.016v6.055h6.055V9H44z" />
    <path d="M46.475 5.818l.707.707 4.243-4.243-.707-.707-4.243 4.243z" />
  </svg>
);

export default SvgComponent;
