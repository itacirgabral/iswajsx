import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 5H.636L7 11.364V5zm-.685.685l-.022 4-3.978-3.978 4-.022z" />
    <path d="M21.142.05L9.122 12.071c-1.172 1.172-2.755 1.488-3.536.707a2 2 0 010-2.828L2.05 6.414a4 4 0 000 5.657l.707.707a5 5 0 007.071 0L21.85.758 21.142.05z" />
    <path d="M6.315 5.685l-4 .022 3.978 3.978.022-4z" fill="#fff" />
  </svg>
);

export default SvgComponent;
