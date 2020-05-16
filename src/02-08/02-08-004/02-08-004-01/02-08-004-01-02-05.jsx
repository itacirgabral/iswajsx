import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={35} {...props}>
    <path d="M18 0v12.313a2 2 0 01-2 2 1.982 1.982 0 01-1.406-.594l-.75-.875A4.01 4.01 0 0011 11.688a4 4 0 00-4 4V21c0 2.404-4 6-4 6h10s-4-3.596-4-6v-5.313a2 2 0 012-2c.552 0 1.044.232 1.406.594l.75.875A4.01 4.01 0 0016 16.312a4 4 0 004-4V0h-2zM0 27l8 8 8-8H0zm2.406 1h11.188L8 33.563 2.406 28z" />
    <path d="M2.406 28L8 33.563 13.594 28H2.406z" fill="#fff" />
  </svg>
);

export default SvgComponent;
