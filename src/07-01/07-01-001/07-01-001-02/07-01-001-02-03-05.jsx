import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M74 2v8H0V2h26v6h21V2h27z" />
    <path d="M26 2v6h21V2H26z" fill="#fff" />
    <path d="M36.5 0c3.666 0 6.724 2.568 7.5 6h-1.156A6.729 6.729 0 0036.5 1.5 6.729 6.729 0 0030.156 6H29c.776-3.432 3.834-6 7.5-6z" />
  </svg>
);

export default SvgComponent;
