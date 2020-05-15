import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M3.5 7L0 3.5l.719-.719L3.5 5.594 6.281 2.78 7 3.5 3.5 7z" />
    <path d="M2 4V0h1v4H2zM4 4V0h1v4H4z" />
  </svg>
);

export default SvgComponent;