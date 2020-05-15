import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M3 4V0h1v4H3zM9 4V0h1v4H9z" />
    <path d="M3.5 7L0 3.5l.719-.688L3.5 5.563l3-2.968 3 2.969 2.781-2.75L13 3.5 9.5 7l-3-3-3 3z" />
  </svg>
);

export default SvgComponent;