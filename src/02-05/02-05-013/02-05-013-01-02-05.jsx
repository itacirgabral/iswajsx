import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 23V0h2v23H9z" />
    <path d="M1.188 11.125l1.437 1.406c1.772 1.436 4.49 1.938 7.063 1.938 2.571 0 5.29-.502 7.062-1.938l.719.719a10.97 10.97 0 01-7.782 3.219 10.97 10.97 0 01-7.78-3.219L.5 11.844l.688-.719z" />
    <path d="M13.219 9L21 16.781V9h-7.781zm2.406 1H20v4.344L15.625 10zM3 23l7 7 7-7H3zm2.438 1h9.125L10 28.563 5.437 24z" />
    <path
      d="M5.438 24L10 28.563 14.563 24H5.437zM15.625 10L20 14.344V10h-4.375z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
