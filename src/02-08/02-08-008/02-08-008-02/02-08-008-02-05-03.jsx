import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={18} {...props}>
    <path d="M0 6v9.192L9.192 6H0zm.994.994l5.768.022-5.746 5.746-.022-5.768zM4.243 10.95l4.242 4.242c2.734 2.734 6.533 3.367 8.486 1.415l3.535-3.536a9 9 0 000-12.728l-7.778 7.778c2.343 2.343 3.293 5.193 2.121 6.364a4 4 0 01-5.657 0L4.95 10.243l-.707.707z" />
    <path d="M.994 6.994l.022 5.768 5.746-5.746-5.768-.022z" fill="#fff" />
  </svg>
);

export default SvgComponent;
