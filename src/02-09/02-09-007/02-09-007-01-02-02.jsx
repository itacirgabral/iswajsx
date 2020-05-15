import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 20a5 5 0 00-5 5v2a5 5 0 005 5v-3a3 3 0 01-3-3v-2a3 3 0 013-3h9v-1h-9zM19 15l5.5 5.5L19 26V15zm1 2.438v6.125l3.063-3.063L20 17.437z" />
    <path d="M12 0h-1v35h1V0z" />
    <path d="M23 5v1H10a3 3 0 00-3 3v5H4v-4a5 5 0 015-5h14z" />
    <path d="M15 0h-3v35h3V0z" fill="#fff" />
    <path d="M16 0h-1v35h1V0z" />
    <path d="M20 17.438l3.063 3.062L20 23.563v-6.125z" fill="#fff" />
    <path d="M11 14l-5.5 5.5L0 14h11zm-2.438 1H2.439L5.5 18.063 8.563 15z" />
    <path d="M8.563 15L5.5 18.063 2.437 15h6.126z" fill="#fff" />
  </svg>
);

export default SvgComponent;
