import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={14} {...props}>
    <path d="M19.95 2.1a4 4 0 010 5.657l-.707.707-.707-.707.707-.707a3 3 0 000-4.242c-1.562-1.562-4.728-.93-7.071 1.414l-.708.707c-2.108 2.108-2.828 8.485-2.828 8.485L.858 5.636s6.377-.72 8.485-2.828l.707-.707a7 7 0 019.9 0z" />
    <path d="M22.778 12H15V4.222L22.778 12zm-2.43-1.016l-4.332-4.331-.022 4.353 4.353-.022z" />
    <path d="M20.347 10.984l-4.353.022.022-4.353 4.331 4.33z" fill="#fff" />
  </svg>
);

export default SvgComponent;
