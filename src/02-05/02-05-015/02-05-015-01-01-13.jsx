import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={33} {...props}>
    <path d="M12 26V0h-2v26h2zM7.778 15H0v7.778L7.778 15zM4 26h14l-7 7-7-7z" />
    <path d="M19.813 17.125l-1.438 1.406c-1.772 1.436-4.49 1.938-7.063 1.938-2.571 0-5.29-.502-7.062-1.938l-.719.719a10.97 10.97 0 007.781 3.219 10.97 10.97 0 007.782-3.219l1.406-1.406-.688-.719zM14.222 5H22v7.778L14.222 5zM2.188 7.125l1.437 1.406c1.772 1.436 4.49 1.938 7.063 1.938 2.571 0 5.29-.502 7.062-1.938l.719.719a10.97 10.97 0 01-7.782 3.219 10.97 10.97 0 01-7.78-3.219L1.5 7.844l.688-.719z" />
  </svg>
);

export default SvgComponent;
