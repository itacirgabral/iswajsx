import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M36 8H0v2h36V8zM24 0l-3.5 3.5L24 7V0zM36 16V2l7 7-7 7z" />
    <path d="M24 3v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3h-5v3h5a6 6 0 000-12h-2zM12 0L8.5 3.5 12 7V0z" />
    <path d="M12 3v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3H9v3h5a6 6 0 000-12h-2z" />
  </svg>
);

export default SvgComponent;
