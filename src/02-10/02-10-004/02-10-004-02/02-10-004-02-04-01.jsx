import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={32} {...props}>
    <path d="M5.5 10.5L0 16h11l-5.5-5.5z" />
    <path d="M10 0C7.598 0 5.575 4.079 5.094 9.5h1.281C6.872 5.058 7.85 2 9 2c1.657 0 3 6.268 3 14s-1.343 14-3 14c-1.106 0-2.05-2.833-2.563-7H5.095c.385 5.118 2.2 9 4.406 9h2c3.038 0 4.5-5.82 4.5-13v-7c0-6.627-2.134-12-6-12z" />
    <path d="M5.5 16.5L0 22h11l-5.5-5.5z" />
  </svg>
);

export default SvgComponent;
