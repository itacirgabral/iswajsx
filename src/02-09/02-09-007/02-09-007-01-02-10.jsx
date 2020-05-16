import React from "react";

const SvgComponent = (props) => (
  <svg width={25} height={35} {...props}>
    <path d="M15 20a5 5 0 015 5v2a5 5 0 01-5 5v-3a3 3 0 003-3v-2a3 3 0 00-3-3H6v-1h9zM6 15L.5 20.5 6 26V15zm-1 2.438v6.125L1.937 20.5 5 17.437z" />
    <path d="M13 0h1v35h-1V0z" />
    <path d="M2 5v1h13a3 3 0 013 3v5h3v-4a5 5 0 00-5-5H2z" />
    <path d="M10 0h3v35h-3V0z" fill="#fff" />
    <path d="M9 0h1v35H9V0z" />
    <path d="M5 17.438L1.937 20.5 5 23.563v-6.125z" fill="#fff" />
    <path d="M14 14l5.5 5.5L25 14H14zm2.438 1h6.125L19.5 18.063 16.437 15z" />
    <path d="M16.438 15l3.062 3.063L22.563 15h-6.125z" fill="#fff" />
  </svg>
);

export default SvgComponent;
