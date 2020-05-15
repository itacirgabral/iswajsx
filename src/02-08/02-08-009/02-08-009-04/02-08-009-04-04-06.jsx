import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M2 0v14.5A1.5 1.5 0 003.5 16c.414 0 .791-.166 1.063-.438L10 10.095V25.5a1.5 1.5 0 001.5 1.5c.414 0 .791-.166 1.063-.438L18 21.095V35a2 2 0 002 2 6 6 0 006-6h2a8 8 0 01-8 8 4 4 0 01-4-4v-9.063l-2.031 2.032A3.48 3.48 0 0111.5 29 3.5 3.5 0 018 25.5V14.937L5.969 16.97A3.48 3.48 0 013.5 18 3.5 3.5 0 010 14.5V0h2z" />
  </svg>
);

export default SvgComponent;
