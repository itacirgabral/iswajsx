import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 0h1v34h-1V0z" />
    <path d="M7 0h3v34H7V0z" fill="#fff" />
    <path d="M6 0h1v34H6V0z" />
    <path d="M5 3a5 5 0 00-5 5v2a5 5 0 005 5h8v-3H5a3 3 0 01-3-3V7a3 3 0 013-3V3zM13 8v11l5.5-5.5L13 8zm1 2.438l3.063 3.062L14 16.563v-6.125z" />
    <path d="M14 10.438v6.124l3.063-3.062L14 10.437z" fill="#fff" />
    <path d="M5 16a5 5 0 00-5 5v2a5 5 0 005 5h8v-3H5a3 3 0 01-3-3v-2a3 3 0 013-3v-1zM13 21v11l5.5-5.5L13 21zm1 2.438l3.063 3.062L14 29.563v-6.125z" />
    <path d="M14 23.438v6.125l3.063-3.063L14 23.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;