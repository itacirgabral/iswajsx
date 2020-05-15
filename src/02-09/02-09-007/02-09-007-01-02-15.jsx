import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 6v1H5a3 3 0 00-3 3v2a3 3 0 003 3h11v3H5a5 5 0 01-5-5v-2a5 5 0 015-5h10z" />
    <path d="M15 1l5.5 5.5L15 12V1zm1 2.438v6.124L19.063 6.5 16 3.437zM7 0v15H6V0h1zm0 18v13H6V18h1zm0 16v6H6v-6h1z" />
    <path d="M16 22v1H5a3 3 0 00-3 3v2a3 3 0 003 3h10v3H5a5 5 0 01-5-5v-2a5 5 0 015-5h11z" />
    <path d="M10 0v15H7V0h3zm0 18v13H7V18h3zm0 16v6H7v-6h3z" fill="#fff" />
    <path d="M11 0v15h-1V0h1zm0 18v13h-1V18h1zm0 16v6h-1v-6h1z" />
    <path d="M16 3.438L19.063 6.5 16 9.563V3.436z" fill="#fff" />
    <path d="M15 27l5.5 5.5L15 38V27zm1 2.438v6.125l3.063-3.063L16 29.437z" />
    <path d="M16 29.438l3.063 3.062L16 35.563v-6.126z" fill="#fff" />
  </svg>
);

export default SvgComponent;
