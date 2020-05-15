import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 48V0h-1v48h1z" />
    <path d="M13.5 27a7.5 7.5 0 110 15H6v-1h7.5a6.5 6.5 0 100-13H5v-1h8.5z" />
    <path d="M13.5 30a4.5 4.5 0 010 9H6v-1h7.5a3.5 3.5 0 100-7H5v-1h8.5z" />
    <path d="M6 34v2l-4 4 4 4v2l-6-6 6-6z" />
    <path
      d="M13.5 28a6.5 6.5 0 110 13H13v1h-1v-4h1v1h.5a4.5 4.5 0 000-9H5v-2h8.5zM11 38v4h-1v-1H6v-2h4v-1h1z"
      fill="#fff"
    />
    <path d="M13.5 7a7.5 7.5 0 110 15H5v-1h8.5a6.5 6.5 0 100-13H6V7h7.5z" />
    <path d="M13.5 10a4.5 4.5 0 010 9H5v-1h8.5a3.5 3.5 0 100-7H6v-1h7.5z" />
    <path d="M6 3v2L2 9l4 4v2L0 9l6-6z" />
    <path
      d="M13.5 8a6.5 6.5 0 110 13H13v1h-1v-4h1v1h.5a4.5 4.5 0 000-9H6V8h7.5zM11 18v4h-1v-1H5v-2h5v-1h1z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;