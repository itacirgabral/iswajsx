import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M2 0v12.313a2 2 0 002 2c.552 0 1.044-.232 1.406-.594l.75-.875A4.01 4.01 0 019 11.688a4 4 0 014 4V21c0 2.404 4 6 4 6H7s4-3.596 4-6v-5.313a2 2 0 00-2-2c-.552 0-1.044.232-1.406.594l-.75.875A4.01 4.01 0 014 16.312a4 4 0 01-4-4V0h2zM20 27l-8 8-8-8h16zm-2.406 1H6.406L12 33.563 17.594 28z" />
    <path d="M17.594 28L12 33.563 6.406 28h11.188z" fill="#fff" />
  </svg>
);

export default SvgComponent;
