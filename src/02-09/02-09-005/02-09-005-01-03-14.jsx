import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 0h-1v24h1V0zM5.5 1.5L0 7h2l3.5-3.5L9 7h2L5.5 1.5z" />
    <path d="M15 0h-3v24h3V0z" fill="#fff" />
    <path d="M16 0h-1v24h1V0z" />
    <path d="M6 7v5a3 3 0 003 3h12v3H10a5 5 0 01-5-5V7h1z" />
  </svg>
);

export default SvgComponent;