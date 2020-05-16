import React from "react";

const SvgComponent = (props) => (
  <svg width={25} height={35} {...props}>
    <path d="M10 6a5 5 0 00-5 5v2a5 5 0 005 5v-3a3 3 0 01-3-3v-2a3 3 0 013-3h9V6h-9zM19 1l5.5 5.5L19 12V1zm1 2.438v6.124L23.063 6.5 20 3.437z" />
    <path d="M12 0h-1v35h1V0z" />
    <path d="M23 20v1H10a3 3 0 00-3 3v5H4v-4a5 5 0 015-5h14z" />
    <path d="M15 0h-3v35h3V0z" fill="#fff" />
    <path d="M16 0h-1v35h1V0z" />
    <path d="M20 3.438L23.063 6.5 20 9.563V3.436z" fill="#fff" />
    <path d="M11 29l-5.5 5.5L0 29h11zm-2.438 1H2.439L5.5 33.063 8.563 30z" />
    <path d="M8.563 30L5.5 33.063 2.437 30h6.126z" fill="#fff" />
  </svg>
);

export default SvgComponent;
