import React from "react";

const SvgComponent = (props) => (
  <svg width={43} height={16} {...props}>
    <path d="M36 8H0v2h36V8zM29 0l3.5 3.5L29 7V0zM36 16V2l7 7-7 7z" />
    <path d="M29 3v1h-2a5 5 0 00-5 5c0 1.657 2.239 3 5 3h5v3h-5a6 6 0 010-12h2zM17 0l3.5 3.5L17 7V0z" />
    <path d="M17 3v1h-2a5 5 0 00-5 5c0 1.657 2.239 3 5 3h5v3h-5a6 6 0 010-12h2z" />
  </svg>
);

export default SvgComponent;
