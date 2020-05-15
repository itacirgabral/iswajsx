import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 16h-2l-3.5 3.5L7 16H5l5.5 5.5L16 16z" />
    <path d="M6 32c2.402 0 4.425-4.079 4.906-9.5H9.625C9.128 26.942 8.15 30 7 30c-1.657 0-3-6.268-3-14S5.343 2 7 2c1.106 0 2.05 2.833 2.563 7h1.343c-.385-5.118-2.2-9-4.406-9h-2C1.462 0 0 5.82 0 13v7c0 6.627 2.134 12 6 12z" />
    <path d="M16 10h-2l-3.5 3.5L7 10H5l5.5 5.5L16 10z" />
  </svg>
);

export default SvgComponent;