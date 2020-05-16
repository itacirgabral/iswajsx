import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={48} {...props}>
    <path d="M12 48V0h-1v48h1z" />
    <path d="M13.5 5a7.5 7.5 0 110 15H6v-1h7.5a6.5 6.5 0 100-13H5V5h8.5z" />
    <path d="M13.5 8a4.5 4.5 0 010 9H6v-1h7.5a3.5 3.5 0 100-7H5V8h8.5z" />
    <path d="M6 12l-6 6 6 6V12z" />
    <path
      d="M13.5 6a6.5 6.5 0 110 13H13v1h-1v-4h1v1h.5a4.5 4.5 0 000-9H5V6h8.5zM11 16v4h-1v-1H6v-2h4v-1h1z"
      fill="#fff"
    />
    <path d="M13.5 29a7.5 7.5 0 110 15H5v-1h8.5a6.5 6.5 0 100-13H6v-1h7.5z" />
    <path d="M13.5 32a4.5 4.5 0 010 9H5v-1h8.5a3.5 3.5 0 100-7H6v-1h7.5z" />
    <path d="M6 25l-6 6 6 6V25z" />
    <path
      d="M13.5 30a6.5 6.5 0 110 13H13v1h-1v-4h1v1h.5a4.5 4.5 0 000-9H6v-2h7.5zM11 40v4h-1v-1H5v-2h5v-1h1z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
