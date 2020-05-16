import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={24} {...props}>
    <path d="M14 6a5 5 0 015 5v2a5 5 0 01-5 5H6v-3h8a3 3 0 003-3v-2a3 3 0 00-3-3H2V6h12z" />
    <path d="M6 11v11L.5 16.5 6 11zm-1 2.438L1.937 16.5 5 19.563v-6.125zM9 0v15H8V0h1zm0 18v6H8v-6h1z" />
    <path d="M12 0v15H9V0h3zm0 18v6H9v-6h3z" fill="#fff" />
    <path d="M13 0v15h-1V0h1zm0 18v6h-1v-6h1z" />
    <path d="M5 13.438v6.124L1.937 16.5 5 13.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
