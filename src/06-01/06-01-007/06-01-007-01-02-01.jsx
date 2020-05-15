import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path
      d="M4.5 20A5.507 5.507 0 000 22.344v6.312c.365.518.826.978 1.344 1.344h6.312A5.507 5.507 0 0010 25.5 5.5 5.5 0 004.5 20z"
      fill="#fff"
    />
    <path d="M3 0v29l16.25-16.25-1.406-1.438L5 24.188V5h22V0H3z" />
    <path
      d="M4.5 22a3.425 3.425 0 012.469 1.031c.316.317.573.675.75 1.094.177.419.281.892.281 1.375s-.104.956-.281 1.375a3.425 3.425 0 01-.75 1.094 3.425 3.425 0 01-1.094.75A3.556 3.556 0 014.5 29a3.425 3.425 0 01-2.469-1.031 3.425 3.425 0 01-.75-1.094A3.556 3.556 0 011 25.5a3.425 3.425 0 011.031-2.469 3.425 3.425 0 011.094-.75A3.556 3.556 0 014.5 22z"
      fill="#fff"
    />
    <path
      d="M2 0v30h1.438l17.25-17.25-2.844-2.844L6 21.75V6h21V5H5v19.156l12.844-12.843 1.406 1.437L3 29V0H2z"
      fill="#fff"
    />
    <path d="M4.5 21a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 1.5a3 3 0 110 6 3 3 0 010-6z" />
  </svg>
);

export default SvgComponent;
