import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={15} {...props}>
    <path d="M12 0C0 0 0 8 0 8c0 .357.034.678.094 1H3c0-5 9-5 9-5v11h8V0h-8z" />
    <path fill="#fff" d="M13 1h3v13h-3z" />
    <path d="M2 13h10v2H2z" />
  </svg>
);

export default SvgComponent;
