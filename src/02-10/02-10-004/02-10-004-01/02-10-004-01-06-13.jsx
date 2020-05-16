import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={25} {...props}>
    <path d="M16 13h-2l-3.5 3.5L7 13H5l5.5 5.5L16 13z" />
    <path d="M6.5 25c1.92 0 3.517-2.3 4.156-5.5H8.781C8.396 22.142 7.522 24 6.5 24 5.12 24 4 20.642 4 16.5v-8C4 4.358 5.12 1 6.5 1c1.085 0 1.998 2.1 2.344 5h1.937C10.214 2.532 8.522 0 6.5 0h-2C2.015 0 0 3.806 0 8.5v8C0 21.194 2.015 25 4.5 25h2z" />
    <path d="M16 7h-2l-3.5 3.5L7 7H5l5.5 5.5L16 7z" />
  </svg>
);

export default SvgComponent;
