import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={10} {...props}>
    <path d="M5 10h5V9H6V5H5v5z" />
    <path d="M10 5c0 1.38-.564 2.626-1.469 3.531l-.687-.687A4.01 4.01 0 009 5a4 4 0 10-8 0c0 1.568.905 2.907 2.219 3.563l-.438.874C1.147 8.616 0 6.954 0 5a5 5 0 0110 0z" />
    <path d="M8 5c0 .828-.332 1.582-.875 2.125l-.719-.719C6.768 6.044 7 5.552 7 5a2 2 0 10-2.906 1.781l-.438.875C2.681 7.161 2 6.17 2 5a3 3 0 016 0z" />
  </svg>
);

export default SvgComponent;
