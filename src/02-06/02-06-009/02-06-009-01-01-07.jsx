import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={48} {...props}>
    <path d="M12 48V0h-1v48h1z" />
    <path d="M13.5 22a7.5 7.5 0 100-15H6v1h7.5a6.5 6.5 0 110 13H5v1h8.5z" />
    <path d="M13.5 19a4.5 4.5 0 000-9H6v1h7.5a3.5 3.5 0 110 7H5v1h8.5z" />
    <path d="M6 3L0 9l6 6V3z" />
    <path
      d="M6 8v2h7.5a4.5 4.5 0 010 9H13v-1h-1v4h1v-1h.5a6.5 6.5 0 100-13H6zm4 10v1H5v2h5v1h1v-4h-1z"
      fill="#fff"
    />
    <path d="M13.5 43a7.5 7.5 0 100-15H6v1h7.5a6.5 6.5 0 110 13H5v1h8.5z" />
    <path d="M13.5 40a4.5 4.5 0 000-9H6v1h7.5a3.5 3.5 0 110 7H5v1h8.5z" />
    <path d="M6 24l-6 6 6 6V24z" />
    <path
      d="M6 29v2h7.5a4.5 4.5 0 010 9H13v-1h-1v4h1v-1h.5a6.5 6.5 0 100-13H6zm4 10v1H5v2h5v1h1v-4h-1z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
