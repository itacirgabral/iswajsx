import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M18 9l-6 6V3l6 6zm-1.406 0L13 5.437v7.125L16.594 9z" />
    <path d="M25 4.5C25 2.015 21.194 0 16.5 0h-8C3.806 0 0 2.015 0 4.5v2C0 8.985 3.806 11 8.5 11H11V7H8.5C4.358 7 1 5.88 1 4.5S4.358 2 8.5 2h8C20.642 2 24 3.12 24 4.5c0 1.085-2.1 1.998-5 2.344v3.937c3.468-.567 6-2.259 6-4.281v-2z" />
    <path d="M16.594 9L13 12.563V5.436L16.594 9z" fill="#fff" />
  </svg>
);

export default SvgComponent;
