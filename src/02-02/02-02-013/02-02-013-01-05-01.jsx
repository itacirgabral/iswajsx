import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M27.5 0l-5 5 .719.719L27.5 1.437l4.281 4.282L32.5 5l-5-5z" />
    <path d="M27 4h1v6h-1V4zM16.5 10l-5-5 .719-.719L16.5 8.563l4.281-4.282L21.5 5l-5 5z" />
    <path d="M16 6h1V0h-1v6zM5.5 0l-5 5 .719.719L5.5 1.437 9.781 5.72 10.5 5l-5-5z" />
    <path d="M5 4h1v6H5V4z" />
  </svg>
);

export default SvgComponent;
