import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={18} {...props}>
    <path d="M0 6v9.192l1.414-1.414V7.414h6.364L9.192 6H0zM4.243 10.95l4.242 4.242c2.734 2.734 6.533 3.367 8.486 1.415l3.535-3.536a9 9 0 000-12.728l-7.778 7.778c2.343 2.343 3.293 5.193 2.121 6.364a4 4 0 01-5.657 0L4.95 10.243l-.707.707z" />
  </svg>
);

export default SvgComponent;
