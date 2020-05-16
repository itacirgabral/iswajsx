import React from "react";

const SvgComponent = (props) => (
  <svg width={32} height={16} {...props}>
    <path d="M7 6h25v2H7V6zM15 9l-3.5 3.5L15 16V9zM7 14V0L0 7l7 7z" />
    <path d="M15 2v1h3a5 5 0 015 5c0 1.657-2.239 3-5 3h-3v3h3a6 6 0 000-12h-3z" />
  </svg>
);

export default SvgComponent;
