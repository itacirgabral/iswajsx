import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 48V0h1v48H9z" />
    <path d="M15 7v1H7.5a6.5 6.5 0 100 13H16v1H7.5a7.5 7.5 0 110-15H15z" />
    <path d="M15 10v1H7.5a3.5 3.5 0 100 7H16v1H7.5a4.5 4.5 0 010-9H15z" />
    <path d="M15 3l6 6-6 6V3z" />
    <path
      d="M15 8v2H7.5a4.5 4.5 0 000 9H8v-1h1v4H8v-1h-.5a6.5 6.5 0 110-13H15zm-4 10v1h5v2h-5v1h-1v-4h1z"
      fill="#fff"
    />
    <path d="M16 27v1H7.5a6.5 6.5 0 100 13H15v1H7.5a7.5 7.5 0 110-15H16z" />
    <path d="M16 30v1H7.5a3.5 3.5 0 100 7H15v1H7.5a4.5 4.5 0 010-9H16z" />
    <path d="M15 34l6 6-6 6V34z" />
    <path
      d="M16 28v2H7.5a4.5 4.5 0 000 9H8v-1h1v4H8v-1h-.5a6.5 6.5 0 110-13H16zm-5 10v1h4v2h-4v1h-1v-4h1z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;