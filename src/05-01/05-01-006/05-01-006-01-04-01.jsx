import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M3 4h1v11H3zM6 4h1v11H6z" />
    <path fill="#fff" d="M4 4h2v11H4z" />
    <path d="M5 0L0 5l.719.719L5 1.437 9.281 5.72 10 5 5 0zM12 11h1V0h-1zM15 11h1V0h-1z" />
    <path fill="#fff" d="M13 11h2V0h-2z" />
    <path d="M14 15l-5-5 .719-.719L14 13.562l4.281-4.28L19 10l-5 5z" />
  </svg>
);

export default SvgComponent;