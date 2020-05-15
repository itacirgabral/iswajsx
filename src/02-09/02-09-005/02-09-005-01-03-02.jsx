import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 15l-5.5 5.5L0 15h2l3.5 3.5L9 15h2zM9 6a5 5 0 00-5 5v4h3v-5a3 3 0 013-3h11V6H9z" />
    <path d="M11 0h1v24h-1V0zM15 0h1v24h-1V0z" />
    <path d="M12 0h3v24h-3V0z" fill="#fff" />
  </svg>
);

export default SvgComponent;