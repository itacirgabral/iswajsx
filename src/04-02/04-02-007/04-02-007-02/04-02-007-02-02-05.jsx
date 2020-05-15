import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M2 4V0h1v4H2zM4 4V0h1v4H4zM8 4V0h1v4H8zM10 4V0h1v4h-1z" />
    <path d="M3.5 7L0 3.5l.719-.688L3.5 5.563l3-2.968 3 2.969 2.781-2.75L13 3.5 9.5 7l-3-3-3 3zM16 4V0h1v4h-1zM18 4V0h1v4h-1zM22 4V0h1v4h-1zM24 4V0h1v4h-1z" />
    <path d="M17.5 7L14 3.5l.719-.688 2.781 2.75 3-2.968 3 2.969 2.781-2.75L27 3.5 23.5 7l-3-3-3 3z" />
  </svg>
);

export default SvgComponent;
