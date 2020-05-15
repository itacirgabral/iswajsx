import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7.5 0l-7 7h14l-7-7zm0 1.438L12.063 6H2.937L7.5 1.437zM4 7h2v7H4V7zM9 7h2v7H9V7z" />
    <path d="M6 7v7h3V7H6zM7.5 1.438L2.937 6h9.126L7.5 1.437z" fill="#fff" />
    <path d="M20.5 17l-7-7h14l-7 7zm0-1.438L25.063 11h-9.125l4.562 4.563zM17 10h2V3h-2v7zM22 10h2V3h-2v7z" />
    <path
      d="M19 10V3h3v7h-3zM20.5 15.563L15.937 11h9.126L20.5 15.563z"
      fill="#fff"
    />
    <path d="M33.5 0l-7 7h14l-7-7zm0 1.438L38.063 6h-9.126L33.5 1.437zM30 7h2v7h-2V7zM35 7h2v7h-2V7z" />
    <path
      d="M32 7v7h3V7h-3zM33.5 1.438L28.937 6h9.125L33.5 1.437z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
