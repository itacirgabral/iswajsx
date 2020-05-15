import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 18l7-7 7 7H0z" />
    <path d="M21 0v11a1 1 0 01-1 1c-.276 0-.538-.1-.719-.281L16 8.438V19a3 3 0 01-3 3c-1.657 0-3-1.79-3-4H4a6 6 0 006 6h3a5 5 0 005-5v-5.781A2.98 2.98 0 0020 14a3 3 0 003-3V0h-2z" />
  </svg>
);

export default SvgComponent;
