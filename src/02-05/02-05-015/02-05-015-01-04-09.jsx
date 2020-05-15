import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 7v26h2V7h-2zM14.222 10H22v7.778L14.222 10zM18 7H4l7-7 7 7z" />
    <path d="M2.188 12.125l1.437 1.406c1.772 1.436 4.49 1.938 7.063 1.938 2.571 0 5.29-.502 7.062-1.938l.719.719a10.97 10.97 0 01-7.782 3.219 10.97 10.97 0 01-7.78-3.219L1.5 12.844l.688-.719zM7.778 20H0v7.778L7.778 20zM19.813 22.125l-1.438 1.406c-1.772 1.436-4.49 1.938-7.063 1.938-2.571 0-5.29-.502-7.062-1.938l-.719.719a10.97 10.97 0 007.781 3.219 10.97 10.97 0 007.782-3.219l1.406-1.406-.688-.719z" />
  </svg>
);

export default SvgComponent;
