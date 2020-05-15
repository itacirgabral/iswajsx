import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
    <path d="M12 25h11v2H12zM8 24h1v4H8zM26 24h1v4h-1zM26.5 19l-2.594 4.469.875.531 1.719-2.969L28.219 24l.875-.531L26.5 19zM8.5 19l-2.594 4.469.875.531L8.5 21.031 10.219 24l.875-.531L8.5 19z" />
  </svg>
);

export default SvgComponent;
