import React from "react";

const SvgComponent = (props) => (
  <svg width={33} height={40} {...props}>
    <path d="M0 8l8-8 8 8H0zM7 8v14a5 5 0 005 5c1.38 0 2.626-.564 3.531-1.469l5.719-5.281c.343-.456 1.002-.75 1.75-.75 1.105 0 2 .672 2 1.5v8c0 4.177-6 11-6 11h14s-6-6.823-6-11v-8a5 5 0 00-5-5c-1.38 0-2.626.564-3.531 1.469L12.75 22.75c-.343.456-1.002.75-1.75.75-1.105 0-2-.672-2-1.5V8H7z" />
  </svg>
);

export default SvgComponent;
