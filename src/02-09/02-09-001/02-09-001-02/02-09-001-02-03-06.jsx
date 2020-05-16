import React from "react";

const SvgComponent = (props) => (
  <svg width={26} height={22} {...props}>
    <path d="M18 0l8 8h-2l-6-6-6 6h-2l8-8zM17 8v6a4 4 0 01-4 4H0v4h12a7 7 0 007-7V8h-2z" />
  </svg>
);

export default SvgComponent;
