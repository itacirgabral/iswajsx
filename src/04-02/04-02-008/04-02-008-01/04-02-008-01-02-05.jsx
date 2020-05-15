import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 9L0 5l.719-.719L4 7.594 7.281 4.28 8 5 4 9z" />
    <path d="M3.5 0v5h1V0h-1zM15 9l-4-4 .719-.719L15 7.594l3.281-3.313L19 5l-4 4z" />
    <path d="M14.5 0v5h1V0h-1z" />
  </svg>
);

export default SvgComponent;
