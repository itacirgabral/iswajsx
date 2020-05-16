import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
    <path d="M10 25v2h7v-2h-7zM20.5 24a2 2 0 00-2 2v1h4v-1a2 2 0 00-2-2z" />
    <path d="M20.5 21c-2.21 0-4 2.239-4 5v1h1v-1a3 3 0 016 0v1h1v-1c0-2.761-1.79-5-4-5z" />
  </svg>
);

export default SvgComponent;
