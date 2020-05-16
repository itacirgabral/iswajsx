import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={27} {...props}>
    <path d="M6 0L0 6v21h12V6L6 0z" />
    <path d="M6 2.813l-4 4V25h8V6.812l-4-4z" fill="#fff" />
    <path d="M15.063 11.063l-1.438 1.406L17.188 16l-.594.594-.125.125L12 21.187V24l5.875-5.875L18 18l.594-.594L20 16l-4.938-4.938z" />
  </svg>
);

export default SvgComponent;
