import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 6h36v2H7V6zM13 9l-3.5 3.5L13 16V9zM7 14V0L0 7l7 7z" />
    <path d="M13 2v1h3a5 5 0 015 5c0 1.657-2.239 3-5 3h-3v3h3a6 6 0 000-12h-3zM26 9l-3.5 3.5L26 16V9zM26 2v1h3a5 5 0 015 5c0 1.657-2.239 3-5 3h-3v3h3a6 6 0 000-12h-3z" />
  </svg>
);

export default SvgComponent;