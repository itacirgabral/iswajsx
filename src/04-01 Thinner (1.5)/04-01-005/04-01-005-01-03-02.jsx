import React from "react";

const SvgComponent = (props) => (
  <svg width={44} height={41} {...props}>
    <path d="M26.5 6C16.835 6 9 13.835 9 23.5S16.835 41 26.5 41 44 33.165 44 23.5 36.165 6 26.5 6zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM14.85 7.485H7.777V6.47h6.055V.414h1.016v7.071z" />
    <path d="M11.667 5.01l.707-.707L8.132.061l-.707.707 4.242 4.242zM0 8.192v7.071h1.016V9.21h6.055V8.192H0z" />
    <path d="M2.475 11.374l.707-.707 4.243 4.243-.707.707-4.243-4.243z" />
  </svg>
);

export default SvgComponent;
