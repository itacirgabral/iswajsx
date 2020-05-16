import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={21} {...props}>
    <path d="M21 4v8l-1.5-1.5v-5h-5L13 4h8zM11 0h1v21h-1V0z" />
    <path d="M8 0h3v21H8V0z" fill="#fff" />
    <path d="M7 0h1v21H7V0z" />
    <path d="M1.063 6L0 7.063 3.5 10.5c1.541 1.532 3.656 2.5 6 2.5a8.45 8.45 0 006-2.5l2.031-1.969L16.47 7.47 15.937 8c-1.585 1.584-4.027 2-6.437 2s-4.852-.415-6.438-2l-2-2z" />
  </svg>
);

export default SvgComponent;
