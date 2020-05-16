import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={8} {...props}>
    <path d="M16 8l1-1h5V2l1-1v7h-7z" />
    <path d="M11.5 0a9.956 9.956 0 017.063 2.938l1.312 1.187-.75.75-1.25-1.25A8.988 8.988 0 0011.5 1a8.988 8.988 0 00-6.375 2.625L.719 8 0 7.281l4.438-4.343A9.956 9.956 0 0111.5 0z" />
  </svg>
);

export default SvgComponent;
