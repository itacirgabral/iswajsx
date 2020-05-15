import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M21 15l-5.5 5.5L10 15h11zm-2.438 1h-6.125l3.063 3.063L18.563 16zM12 6a5 5 0 015 5v4h-3v-5a3 3 0 00-3-3H0V6h12z" />
    <path d="M10 0H9v37h1V0zM21 29l-5.5 5.5L10 29h11zm-2.438 1h-6.125l3.063 3.063L18.563 30zM6 0H5v37h1V0z" />
    <path d="M12 20a5 5 0 015 5v4h-3v-5a3 3 0 00-3-3H0v-1h12z" />
    <path
      d="M9 0H6v37h3V0zM18.563 30L15.5 33.063 12.437 30h6.126zM18.563 16L15.5 19.063 12.437 16h6.126z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;