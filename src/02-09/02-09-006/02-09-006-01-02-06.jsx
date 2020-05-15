import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 0h1v38H9V0zM15.5 1.5L10 7h11l-5.5-5.5zm0 1.438L18.563 6h-6.125L15.5 2.937z" />
    <path d="M6 0h3v38H6V0z" fill="#fff" />
    <path d="M5 0h1v38H5V0z" />
    <path d="M15 7v5a3 3 0 01-3 3H0v3h11a5 5 0 005-5V7h-1z" />
    <path d="M15.5 2.938L12.437 6h6.126L15.5 2.937z" fill="#fff" />
    <path d="M15.5 17.5L10 23h11l-5.5-5.5zm0 1.438L18.563 22h-6.125l3.062-3.063zM15 23v5a3 3 0 01-3 3H0v3h11a5 5 0 005-5v-6h-1z" />
    <path d="M15.5 18.938L12.437 22h6.126L15.5 18.937z" fill="#fff" />
  </svg>
);

export default SvgComponent;
