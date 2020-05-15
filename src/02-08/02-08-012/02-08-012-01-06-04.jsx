import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 5H.636l.707.707h4.95v4.95l.707.707V5z" />
    <path d="M21.142.05L9.122 12.071c-1.172 1.172-2.755 1.488-3.536.707a2 2 0 010-2.828L2.05 6.414a4 4 0 000 5.657l.707.707a5 5 0 007.071 0L21.85.758 21.142.05z" />
  </svg>
);

export default SvgComponent;
