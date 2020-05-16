import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={18} {...props}>
    <path d="M0 8v2h17V8H0zM17 11L0 15.563.5 17.5l17.031-4.563L17 11zM.5.5L0 2.438 17 7l.531-1.938L.5.5z" />
  </svg>
);

export default SvgComponent;
