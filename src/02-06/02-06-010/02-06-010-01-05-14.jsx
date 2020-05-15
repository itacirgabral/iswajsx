import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 7l5-5 5 5H0zm2.438-1h5.124L5 3.437 2.437 6zM3 12a9 9 0 009 9h6v-1h-6a8 8 0 01-8-8V7H3v5z" />
    <path d="M4 12a8 8 0 008 8h6v-2h-6a6 6 0 01-6-6V7H4v5z" fill="#fff" />
    <path d="M6 12a6 6 0 006 6h6v-1h-6a5 5 0 01-5-5V7H6v5zM22 18V8l5 5-5 5zm1-2.438L25.563 13 23 10.437v5.126z" />
    <path d="M19 15a9 9 0 01-9-9V0h1v6a8 8 0 008 8h3v1h-3z" />
    <path d="M19 14a8 8 0 01-8-8V0h2v6a6 6 0 006 6h3v2h-3z" fill="#fff" />
    <path d="M19 12a6 6 0 01-6-6V0h1v6a5 5 0 005 5h3v1h-3z" />
    <path
      d="M2.438 6L5 3.437 7.563 6H2.438zM23 15.563v-5.126L25.563 13 23 15.563z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
