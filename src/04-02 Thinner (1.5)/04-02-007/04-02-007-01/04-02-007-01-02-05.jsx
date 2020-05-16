import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={9} {...props}>
    <path d="M4 9L0 5l.719-.719L4 7.594 7.281 4.28 8 5 4 9z" />
    <path d="M2 5V0h1v5H2zM5 5V0h1v5H5zM15 9l-4-4 .719-.719L15 7.594l3.281-3.313L19 5l-4 4z" />
    <path d="M13 5V0h1v5h-1zM16 5V0h1v5h-1z" />
  </svg>
);

export default SvgComponent;
