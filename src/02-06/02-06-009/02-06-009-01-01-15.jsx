import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 48V0h1v48H9z" />
    <path d="M7.5 22a7.5 7.5 0 110-15H15v1H7.5a6.5 6.5 0 100 13H16v1H7.5z" />
    <path d="M7.5 19a4.5 4.5 0 010-9H15v1H7.5a3.5 3.5 0 100 7H16v1H7.5z" />
    <path d="M15 3l6 6-6 6V3zM7.5 43a7.5 7.5 0 110-15H15v1H7.5a6.5 6.5 0 100 13H16v1H7.5z" />
    <path d="M7.5 40a4.5 4.5 0 010-9H15v1H7.5a3.5 3.5 0 100 7H16v1H7.5z" />
    <path d="M15 24l6 6-6 6V24z" />
    <path
      d="M7.5 29a6.5 6.5 0 100 13H8v1h1v-4H8v1h-.5a4.5 4.5 0 010-9H15v-2H7.5zM10 39v4h1v-1h5v-2h-5v-1h-1zM7.5 8a6.5 6.5 0 100 13H8v1h1v-4H8v1h-.5a4.5 4.5 0 010-9H15V8H7.5zM10 18v4h1v-1h5v-2h-5v-1h-1z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;