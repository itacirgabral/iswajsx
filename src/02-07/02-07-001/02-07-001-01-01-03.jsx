import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={23} {...props}>
    <path d="M0 23h10L0 13v10z" />
    <path d="M7.469 20.469l-1.063-1.063 2.75-2.75A7.974 7.974 0 0011.5 11c0-2.21-.896-4.209-2.344-5.656L4.875 1.062 5.938 0l4.28 4.281A9.472 9.472 0 0113 11c0 2.623-1.062 5-2.781 6.719l-2.75 2.75z" />
    <path d="M3.594 16.594L2.53 15.53l2.75-2.75C5.734 12.33 6 11.691 6 11c0-.69-.266-1.329-.719-1.781L1 4.938l1.063-1.063 4.28 4.281A4.01 4.01 0 017.5 11a4.01 4.01 0 01-1.156 2.844l-2.75 2.75z" />
    <path
      d="M6.406 19.406l-2.812-2.812 2.75-2.75A4.01 4.01 0 007.5 11a4.01 4.01 0 00-1.156-2.844L2.062 3.875l2.813-2.813 4.281 4.282A7.974 7.974 0 0111.5 11c0 2.21-.896 4.209-2.344 5.656l-2.75 2.75z"
      fill="#fff"
    />
    <path d="M1 12V9h16v3H1z" />
  </svg>
);

export default SvgComponent;
