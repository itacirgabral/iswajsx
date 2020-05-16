import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={15} {...props}>
    <path d="M12 0C0 0 0 8 0 8c0 7 12 7 12 7h8V0h-8zm0 4v9c-9 0-9-4-9-4 0-5 9-5 9-5z" />
    <path fill="#fff" d="M13 1h3v13h-3z" />
  </svg>
);

export default SvgComponent;
