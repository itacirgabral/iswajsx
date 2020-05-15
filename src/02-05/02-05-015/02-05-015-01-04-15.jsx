import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 8h36v2H7V8zM14 0l-3.5 3.5L14 7V0zM7 16V2L0 9l7 7z" />
    <path d="M14 3v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3h-5v3h5a6 6 0 000-12h-2zM26 11l-3.5 3.5L26 18v-7zM26 4v1h3a5 5 0 015 5c0 1.657-2.239 3-5 3h-3v3h3a6 6 0 000-12h-3z" />
  </svg>
);

export default SvgComponent;
