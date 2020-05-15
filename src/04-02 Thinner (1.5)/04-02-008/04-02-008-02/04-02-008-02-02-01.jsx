import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M3 3v4h1V3H3zM9 3v4h1V3H9z" />
    <path d="M3.5 0L0 3.5l.719.688L3.5 1.438l3 2.968 3-2.968 2.781 2.75L13 3.5 9.5 0l-3 3-3-3zM17 3v4h1V3h-1zM23 3v4h1V3h-1z" />
    <path d="M17.5 0L14 3.5l.719.688 2.781-2.75 3 2.968 3-2.968 2.781 2.75L27 3.5 23.5 0l-3 3-3-3z" />
  </svg>
);

export default SvgComponent;
