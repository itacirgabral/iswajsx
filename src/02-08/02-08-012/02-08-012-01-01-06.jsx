import React from "react";

const SvgComponent = (props) => (
  <svg width={33} height={24} {...props}>
    <path d="M27 19l-7-7-7 7h14z" />
    <path d="M11 0v19a3 3 0 006 0h6c0 2.761-2.686 5-6 5h-3a5 5 0 01-5-5V0h2z" />
    <path d="M33 13v1h-9v-1h9zm-17 0v1H0v-1h16z" />
  </svg>
);

export default SvgComponent;
