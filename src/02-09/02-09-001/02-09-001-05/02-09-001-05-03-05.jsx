import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M29 0v2l-5 5 5 5v2l-7-7 7-7z" />
    <path d="M8 6a8 8 0 000 16h29a8 8 0 100-16h-8v2h8a6 6 0 016 6c0 2.21-2.686 4-6 4H8c-3.314 0-6-1.79-6-4a6 6 0 016-6h9V6H8z" />
  </svg>
);

export default SvgComponent;
