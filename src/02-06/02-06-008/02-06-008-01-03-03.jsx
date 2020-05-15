import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 29V0h1v29H8z" />
    <path d="M7.5 5a7.5 7.5 0 100 15H15v-1H7.5a6.5 6.5 0 110-13H16V5H7.5z" />
    <path d="M7.5 8a4.5 4.5 0 000 9H15v-1H7.5a3.5 3.5 0 110-7H16V8H7.5z" />
    <path
      d="M7.5 6A6.5 6.5 0 001 12.5c0 3.419 2.648 6.21 6 6.469v1.062L8 20v-4l-1-.031v.969c-2.246-.253-4-2.124-4-4.438A4.5 4.5 0 017.5 8H16V6H7.5zM9 16v4h1v-1h5v-2h-5v-1H9z"
      fill="#fff"
    />
    <path d="M15 12v2l4 4-4 4v2l6-6-6-6z" />
  </svg>
);

export default SvgComponent;
