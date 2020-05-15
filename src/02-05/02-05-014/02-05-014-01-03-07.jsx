import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M36 16l7-7-7-7v2.844L40.156 9 36 13.156V16zM36 10H0V8h36v2zM24 0v1.406L21.906 3.5 24 5.594V7l-3.5-3.5L24 0z" />
    <path d="M24 3v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3h-5v3h5a6 6 0 000-12h-2zM12 0v1.406L9.906 3.5 12 5.594V7L8.5 3.5 12 0z" />
    <path d="M12 3v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3H9v3h5a6 6 0 000-12h-2z" />
  </svg>
);

export default SvgComponent;