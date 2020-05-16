import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={36} {...props}>
    <path d="M7 29V0h1v29H7zM13.222 6H21v7.778L13.222 6zM17 29H3l7 7 7-7zM12 29V0h1v29h-1z" />
    <path d="M8 29V0h4v29H8z" fill="#fff" />
    <path d="M1.188 8.125l1.437 1.406c1.772 1.436 4.49 1.938 7.063 1.938 2.571 0 5.29-.502 7.062-1.938l.719.719a10.97 10.97 0 01-7.782 3.219 10.97 10.97 0 01-7.78-3.219L.5 8.844l.688-.719zM13.222 17H21v7.778L13.222 17zM1.188 19.125l1.437 1.406c1.772 1.436 4.49 1.938 7.063 1.938 2.571 0 5.29-.502 7.062-1.938l.719.719a10.97 10.97 0 01-7.782 3.219 10.97 10.97 0 01-7.78-3.219L.5 19.844l.688-.719z" />
  </svg>
);

export default SvgComponent;
