import React from "react";

const SvgComponent = (props) => (
  <svg width={47} height={18} {...props}>
    <path d="M0 8v2h17V8H0zM17 11L0 15.563.5 17.5l17.031-4.563L17 11zM.5.5L0 2.438 17 7l.531-1.938L.5.5zM47 8v2H30V8h17zM30 11l17 4.563-.5 1.937-17.031-4.563L30 11zM46.5.5l.5 1.938L30 7l-.531-1.938L46.5.5z" />
  </svg>
);

export default SvgComponent;
