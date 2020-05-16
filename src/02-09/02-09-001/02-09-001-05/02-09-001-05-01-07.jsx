import React from "react";

const SvgComponent = (props) => (
  <svg width={43} height={22} {...props}>
    <path d="M7 0v14L0 7l7-7zM7 6v2h28a6 6 0 016 6c0 2.21-2.686 4-6 4H25v4h10a8 8 0 100-16H7z" />
  </svg>
);

export default SvgComponent;
