import React from "react";

const SvgComponent = (props) => (
  <svg width={30} height={21} {...props}>
    <path d="M.1 16H10V6.1L8.586 7.516v7.07H1.515L.1 16z" />
    <path d="M2.222 2.565a5 5 0 000 7.071l2.121 2.121 1.414-1.414-2.121-2.121a3 3 0 010-4.243l.707-.707a4 4 0 015.657 0l6.364 6.364c2.848 2.848 4.243 11.314 4.243 11.314l8.485-8.486s-8.466-1.394-11.314-4.242l-6.364-6.364a6 6 0 00-8.485 0l-.707.707z" />
  </svg>
);

export default SvgComponent;
