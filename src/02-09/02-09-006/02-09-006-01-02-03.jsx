import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={44} {...props}>
    <path d="M5 6a5 5 0 00-5 5v2a5 5 0 005 5h8v-3H5a3 3 0 01-3-3v-2a3 3 0 013-3h12V6H5z" />
    <path d="M13 11v11l5.5-5.5L13 11zm1 2.438l3.063 3.062L14 19.563v-6.125zM10 0v15h1V0h-1zm0 18v15h1V18h-1zm0 18v8h1v-8h-1z" />
    <path d="M5 24a5 5 0 00-5 5v2a5 5 0 005 5h8v-3H5a3 3 0 01-3-3v-2a3 3 0 013-3h12v-1H5z" />
    <path d="M7 0v15h3V0H7zm0 18v15h3V18H7zm0 18v8h3v-8H7z" fill="#fff" />
    <path d="M13 29v11l5.5-5.5L13 29zm1 2.438l3.063 3.062L14 37.563v-6.126zM6 0v15h1V0H6zm0 18v15h1V18H6zm0 18v8h1v-8H6z" />
    <path
      d="M14 31.438v6.125l3.063-3.063L14 31.437zM14 13.438v6.124l3.063-3.062L14 13.437z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
