import React from "react";

const SvgComponent = (props) => (
  <svg width={13} height={7} {...props}>
    <path d="M2 3v4h1V3H2zM4 3v4h1V3H4zM8 3v4h1V3H8zM10 3v4h1V3h-1z" />
    <path d="M3.5 0L0 3.5l.719.688L3.5 1.438l3 2.968 3-2.968 2.781 2.75L13 3.5 9.5 0l-3 3-3-3z" />
  </svg>
);

export default SvgComponent;
