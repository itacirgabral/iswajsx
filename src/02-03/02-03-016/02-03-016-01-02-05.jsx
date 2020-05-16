import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={30} {...props}>
    <path d="M12 23V0h1v23h-1zM7 23V0h1v23H7z" />
    <path d="M8 23V0h4v23H8z" fill="#fff" />
    <path d="M1.188 9.125l1.437 1.406c1.772 1.436 4.49 1.938 7.063 1.938 2.571 0 5.29-.502 7.062-1.938l.719.719a10.97 10.97 0 01-7.782 3.219 10.97 10.97 0 01-7.78-3.219L.5 9.844l.688-.719z" />
    <path d="M13.219 7L21 14.781V7h-7.781zm2.406 1H20v4.344L15.625 8zM3 23l7 7 7-7H3zm2.438 1h9.125L10 28.563 5.437 24z" />
    <path
      d="M5.438 24L10 28.563 14.563 24H5.437zM15.625 8L20 12.344V8h-4.375z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
