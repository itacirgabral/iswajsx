import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={24} {...props}>
    <path d="M7 11l-7 7h14l-7-7zm0 1.406L11.563 17H2.437L7 12.406z" />
    <path d="M21 0v11a1 1 0 01-1 1c-.276 0-.538-.1-.719-.281L16 8.438V19a3 3 0 01-3 3c-1.657 0-3-1.79-3-4H4a6 6 0 006 6h3a5 5 0 005-5v-5.781A2.98 2.98 0 0020 14a3 3 0 003-3V0h-2z" />
    <path d="M7 12.406L2.437 17h9.126L7 12.406z" fill="#fff" />
  </svg>
);

export default SvgComponent;
