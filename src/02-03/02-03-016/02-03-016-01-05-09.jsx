import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 7v23h1V7h-1zM7 7v23h1V7H7z" />
    <path d="M8 7v23h4V7H8z" fill="#fff" />
    <path d="M1.188 16.125l1.437 1.406c1.772 1.436 4.49 1.938 7.063 1.938 2.571 0 5.29-.502 7.062-1.938l.719.719a10.97 10.97 0 01-7.782 3.219 10.97 10.97 0 01-7.78-3.219L.5 16.844l.688-.719z" />
    <path d="M13.219 14L21 21.781V14h-7.781zm2.406 1H20v4.344L15.625 15zM3 7l7-7 7 7H3zm2.438-1h9.125L10 1.437 5.437 6z" />
    <path
      d="M5.438 6L10 1.437 14.563 6H5.437zM15.625 15L20 19.344V15h-4.375z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
