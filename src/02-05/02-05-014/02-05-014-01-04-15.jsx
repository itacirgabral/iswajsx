import React from "react";

const SvgComponent = (props) => (
  <svg width={43} height={16} {...props}>
    <path d="M7 8h36v2H7V8zM14 0l-3.5 3.5L14 7V0zM7 16V2L0 9l7 7z" />
    <path d="M14 3v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3h-5v3h5a6 6 0 000-12h-2zM26 0l-3.5 3.5L26 7V0z" />
    <path d="M26 3v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3h-5v3h5a6 6 0 000-12h-2z" />
  </svg>
);

export default SvgComponent;
