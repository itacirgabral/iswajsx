import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={44} {...props}>
    <path d="M5 6a5 5 0 00-5 5v2a5 5 0 005 5h8v-3H5a3 3 0 01-3-3v-2a3 3 0 013-3h12V6H5z" />
    <path d="M13 11l5.5 5.5L13 22v-2l3.5-3.5L13 13v-2zM10 0v15h1V0h-1zm0 18v15h1V18h-1zm0 18v8h1v-8h-1z" />
    <path d="M5 24a5 5 0 00-5 5v2a5 5 0 005 5h8v-3H5a3 3 0 01-3-3v-2a3 3 0 013-3h12v-1H5z" />
    <path d="M7 0v15h3V0H7zm0 18v15h3V18H7zm0 18v8h3v-8H7z" fill="#fff" />
    <path d="M13 29l5.5 5.5L13 40v-2l3.5-3.5L13 31v-2zM6 0v15h1V0H6zm0 18v15h1V18H6zm0 18v8h1v-8H6z" />
  </svg>
);

export default SvgComponent;
