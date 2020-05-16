import React from "react";

const SvgComponent = (props) => (
  <svg width={26} height={22} {...props}>
    <path d="M10 8h16l-8-8-8 8zM17 8v6a4 4 0 01-4 4H0v4h12a7 7 0 007-7V8h-2z" />
  </svg>
);

export default SvgComponent;
