import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v23L18 5l-1.406-1.406L2 18.188V0H0z" />
    <path d="M5 0V10.937l9.469-9.468L13.063.062 7 6.125V0H5z" />
    <path d="M2 0v18.188L16.594 3.594l-2.125-2.125L5 10.938V0H2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
