import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={26} {...props}>
    <path d="M0 8l7 7 7-7h-2l-5 5-5-5H0z" />
    <path d="M11 0a5 5 0 00-5 5v3h2V5a3 3 0 013-3h1a4 4 0 014 4v9c0 4.028-5 11-5 11h12s-5-6.972-5-11V6a6 6 0 00-6-6h-1z" />
  </svg>
);

export default SvgComponent;
