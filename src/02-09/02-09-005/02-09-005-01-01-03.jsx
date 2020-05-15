import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 6a5 5 0 00-5 5v2a5 5 0 005 5h8v-3H5a3 3 0 01-3-3v-2a3 3 0 013-3h12V6H5z" />
    <path d="M13 11v11l5.5-5.5L13 11zM10 0v15h1V0h-1zm0 18v6h1v-6h-1z" />
    <path d="M7 0v15h3V0H7zm0 18v6h3v-6H7z" fill="#fff" />
    <path d="M6 0v15h1V0H6zm0 18v6h1v-6H6z" />
  </svg>
);

export default SvgComponent;
