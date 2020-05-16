import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={45} {...props}>
    <path d="M5 28a5 5 0 00-5 5v2a5 5 0 005 5h12v-3H5a3 3 0 01-3-3v-2a3 3 0 013-3h8v-1H5z" />
    <path d="M5 0v14h1V0H5zm0 17v20h1V17H5zm0 23v5h1v-5H5z" />
    <path d="M5 5a5 5 0 00-5 5v2a5 5 0 005 5h8v-3H5a3 3 0 01-3-3V9a3 3 0 013-3h12V5H5z" />
    <path d="M6 0v14h3V0H6zm0 17v20h3V17H6zm0 23v5h3v-5H6z" fill="#fff" />
    <path d="M13 10v11l5.5-5.5L13 10zm1 2.438l3.063 3.062L14 18.563v-6.125zM9 0v14h1V0H9zm0 17v20h1V17H9zm0 23v5h1v-5H9z" />
    <path d="M14 12.438v6.124l3.063-3.062L14 12.437z" fill="#fff" />
    <path d="M13 23v11l5.5-5.5L13 23zm1 2.438l3.063 3.062L14 31.563v-6.125z" />
    <path d="M14 25.438v6.125l3.063-3.063L14 25.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
