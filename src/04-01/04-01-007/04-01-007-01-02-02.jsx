import React from "react";

const SvgComponent = (props) => (
  <svg width={14} height={10} {...props}>
    <path d="M3.5 0L0 3.5 3.5 7l.719-.719L1.437 3.5 4.22.719 3.5 0z" />
    <path d="M4 3v1h6a2 2 0 010 4H3v2h7.5a3.5 3.5 0 100-7H4z" />
  </svg>
);

export default SvgComponent;
