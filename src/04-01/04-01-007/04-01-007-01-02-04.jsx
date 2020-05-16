import React from "react";

const SvgComponent = (props) => (
  <svg width={14} height={10} {...props}>
    <path d="M10.5 0L14 3.5 10.5 7l-.719-.719L12.562 3.5 9.783.719 10.5 0z" />
    <path d="M10 3v1H4a2 2 0 000 4h7v2H3.5a3.5 3.5 0 110-7H10z" />
  </svg>
);

export default SvgComponent;
