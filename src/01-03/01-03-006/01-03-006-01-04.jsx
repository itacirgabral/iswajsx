import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 10h15v13H0z" />
    <path fill="#fff" d="M2 12h11v9H2z" />
    <path d="M16 0c-1.656 0-3 1.344-3 3 0 .979.461 1.859 1.188 2.406L12.688 8H15l1.156-2.031C17.736 5.884 19 4.6 19 3c0-1.656-1.344-3-3-3zM8 0a3.001 3.001 0 00-.125 6l1.156 2h2.313l-1.5-2.625A3.002 3.002 0 0011 3c0-1.656-1.344-3-3-3zM21.375 8.813L16 14.186V17l6.781-6.781-1.406-1.406z" />
  </svg>
);

export default SvgComponent;
