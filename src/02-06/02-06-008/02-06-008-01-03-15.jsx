import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 29V0h1v29H8z" />
    <path d="M7.5 22a7.5 7.5 0 110-15H15v1H7.5a6.5 6.5 0 100 13H16v1H7.5z" />
    <path d="M7.5 19a4.5 4.5 0 010-9H15v1H7.5a3.5 3.5 0 100 7H16v1H7.5z" />
    <path
      d="M15 8v2H7.5A4.5 4.5 0 003 14.5c0 2.314 1.754 4.185 4 4.438v-.97L8 18v4l-1 .031V20.97c-3.352-.26-6-3.05-6-6.469A6.5 6.5 0 017.5 8H15zm-5 10v1h6v2h-6v1H9v-4h1z"
      fill="#fff"
    />
    <path d="M15 3v2l4 4-4 4v2l6-6-6-6z" />
  </svg>
);

export default SvgComponent;
