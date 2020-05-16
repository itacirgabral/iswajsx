import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={36} {...props}>
    <path d="M8 29V0h1v29H8zM14.222 6H22v7.778L14.222 6zM18 29H4l7 7 7-7zM13 29V0h1v29h-1z" />
    <path d="M9 29V0h4v29H9z" fill="#fff" />
    <path d="M2.188 8.125l1.437 1.406c1.772 1.436 4.49 1.938 7.063 1.938 2.571 0 5.29-.502 7.062-1.938l.719.719a10.97 10.97 0 01-7.782 3.219 10.97 10.97 0 01-7.78-3.219L1.5 8.844l.688-.719zM7.778 17H0v7.778L7.778 17zM19.813 19.125l-1.438 1.406c-1.772 1.436-4.49 1.938-7.063 1.938-2.571 0-5.29-.502-7.062-1.938l-.719.719a10.97 10.97 0 007.781 3.219 10.97 10.97 0 007.782-3.219l1.406-1.406-.688-.719z" />
  </svg>
);

export default SvgComponent;
