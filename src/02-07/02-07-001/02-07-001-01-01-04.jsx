import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17 23H7l10-10v10z" />
    <path d="M9.531 20.469l1.063-1.063-2.75-2.75A7.974 7.974 0 015.5 11c0-2.21.896-4.209 2.344-5.656l4.281-4.282L11.062 0l-4.28 4.281A9.472 9.472 0 004 11c0 2.623 1.062 5 2.781 6.719l2.75 2.75z" />
    <path d="M13.406 16.594l1.063-1.063-2.75-2.75A2.513 2.513 0 0111 11c0-.69.266-1.329.719-1.781L16 4.938l-1.063-1.063-4.28 4.281A4.01 4.01 0 009.5 11a4.01 4.01 0 001.156 2.844l2.75 2.75z" />
    <path
      d="M10.594 19.406l2.812-2.812-2.75-2.75A4.01 4.01 0 019.5 11a4.01 4.01 0 011.156-2.844l4.281-4.281-2.812-2.813-4.281 4.282A7.974 7.974 0 005.5 11c0 2.21.896 4.209 2.344 5.656l2.75 2.75z"
      fill="#fff"
    />
    <path d="M16 12V9H0v3h16z" />
  </svg>
);

export default SvgComponent;