import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={32} {...props}>
    <path d="M5.5 13.5L0 19h11l-5.5-5.5zm0 1.438L8.563 18H2.436L5.5 14.937z" />
    <path d="M10 0C7.239 0 5 5.373 5 12v.5h1.125C6.46 6.478 7.605 2 9 2c1.657 0 3 6.268 3 14s-1.343 14-3 14c-1.356 0-2.472-4.237-2.844-10H5v1c0 6.075 2.015 11 4.5 11h2c3.038 0 4.5-5.82 4.5-13v-7c0-6.627-2.134-12-6-12z" />
    <path d="M5.5 14.938L2.437 18h6.126L5.5 14.937z" fill="#fff" />
  </svg>
);

export default SvgComponent;
