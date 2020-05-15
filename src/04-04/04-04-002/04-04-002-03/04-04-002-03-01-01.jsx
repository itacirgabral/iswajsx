import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
    <path d="M9.125 23c1.916 3.63 4.947 6 8.375 6s6.459-2.37 8.375-6H9.125zM13 25h9c-1.305 1.254-2.844 2-4.5 2-1.656 0-3.195-.746-4.5-2z" />
  </svg>
);

export default SvgComponent;
