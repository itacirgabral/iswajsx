import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={30} {...props}>
    <path d="M18 23l-7 7-7-7h2.844L11 27.156 15.156 23H18zM12 23V0h-2v23h2zM0 16.781V9h7.781l-1 1H1v5.781l-1 1z" />
    <path d="M19.813 11.125l-1.438 1.406c-1.772 1.436-4.49 1.938-7.063 1.938-2.571 0-5.29-.502-7.062-1.938l-.719.719a10.97 10.97 0 007.781 3.219 10.97 10.97 0 007.782-3.219l1.406-1.406-.688-.719z" />
  </svg>
);

export default SvgComponent;
