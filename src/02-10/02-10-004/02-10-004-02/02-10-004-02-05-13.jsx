import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={32} {...props}>
    <path d="M10.5 21.5L16 16H5l5.5 5.5zm0-1.438L7.437 17h6.125L10.5 20.063z" />
    <path d="M6 32c2.402 0 4.425-4.079 4.906-9.5H9.625C9.128 26.942 8.15 30 7 30c-1.657 0-3-6.268-3-14S5.343 2 7 2c1.106 0 2.05 2.833 2.563 7h1.343c-.385-5.118-2.2-9-4.406-9h-2C1.462 0 0 5.82 0 13v7c0 6.627 2.134 12 6 12z" />
    <path d="M10.5 20.063L13.563 17H7.436l3.063 3.063z" fill="#fff" />
    <path d="M10.5 15.5L16 10H5l5.5 5.5zm0-1.438L7.437 11h6.125L10.5 14.063z" />
    <path d="M10.5 14.063L13.563 11H7.436l3.063 3.063z" fill="#fff" />
  </svg>
);

export default SvgComponent;
