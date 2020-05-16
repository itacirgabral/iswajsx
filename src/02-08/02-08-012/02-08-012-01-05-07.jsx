import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={15} {...props}>
    <path d="M15 5h6.364L15 11.364V5zm.685.685l.022 4 3.978-3.978-4-.022z" />
    <path d="M.858.05l12.02 12.021c1.172 1.172 2.755 1.488 3.536.707a2 2 0 000-2.828l3.536-3.536a4 4 0 010 5.657l-.707.707a5 5 0 01-7.071 0L.15.758.858.05z" />
    <path d="M15.685 5.685l4 .022-3.978 3.978-.022-4z" fill="#fff" />
  </svg>
);

export default SvgComponent;
