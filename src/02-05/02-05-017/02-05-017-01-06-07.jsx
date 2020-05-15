import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 9v2h31V9H0zM31 17l7-7-7-7v2.844L35.156 10 31 14.156V17zM14 3l4.5 4.5L23 3h-1.406L18.5 6.094 15.406 3H14z" />
    <path d="M21.5 0C23.433 0 25 1.343 25 3v8c0 4.418 1.79 8 4 8h-9c2.21 0 4-3.582 4-8V3c0-1.105-1.12-2-2.5-2S19 1.895 19 3h-1c0-1.657 1.567-3 3.5-3zM2 3l4.5 4.5L11 3H9.594L6.5 6.094 3.406 3H2z" />
    <path d="M9.5 0C11.433 0 13 1.343 13 3v8c0 4.418 1.79 8 4 8H8c2.21 0 4-3.582 4-8V3c0-1.105-1.12-2-2.5-2S7 1.895 7 3H6c0-1.657 1.567-3 3.5-3z" />
  </svg>
);

export default SvgComponent;
