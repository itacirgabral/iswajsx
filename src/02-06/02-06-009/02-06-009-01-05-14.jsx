import React from "react";

const SvgComponent = (props) => (
  <svg width={26} height={24} {...props}>
    <path d="M0 10l5-5 5 5H0zm2.438-1h5.124L5 6.437 2.437 9zM3 15a9 9 0 009 9h6v-1h-6a8 8 0 01-8-8v-5H3v5z" />
    <path d="M4 15a8 8 0 008 8h6v-2h-6a6 6 0 01-6-6v-5H4v5z" fill="#fff" />
    <path d="M6 15a6 6 0 006 6h6v-1h-6a5 5 0 01-5-5v-5H6v5zM8 5l5-5 5 5H8zm2.438-1h5.124L13 1.437 10.437 4z" />
    <path d="M11 10a9 9 0 009 9h6v-1h-6a8 8 0 01-8-8V5h-1v5z" />
    <path d="M12 10a8 8 0 008 8h6v-2h-6a6 6 0 01-6-6V5h-2v5z" fill="#fff" />
    <path d="M14 10a6 6 0 006 6h6v-1h-6a5 5 0 01-5-5V5h-1v5z" />
    <path
      d="M2.438 9L5 6.437 7.563 9H2.438zM10.438 4L13 1.437 15.563 4h-5.126z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
