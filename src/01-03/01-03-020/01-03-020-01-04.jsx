import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 17h15v13H6z" />
    <path fill="#fff" d="M8 19h11v9H8z" />
    <path d="M3 6v7h2V8h2v7h2V6H3zM14 0h-2v15h2V0z" />
    <path d="M2.25 8.219L.312 8.75 5 26.25V18.5L2.25 8.219z" />
  </svg>
);

export default SvgComponent;
