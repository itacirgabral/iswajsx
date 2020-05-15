import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path
      d="M7 0v2.719L.469 14l8.75 15.156C8.518 28.613 7.825 28 7 28H6c-1.49 0-2.51 2-4 2H0v1h2c1.49 0 2.51-2 4-2h1c1.49 0 2.51 2 4 2v-1L1.656 14 8 3V0H7zm3.313 3L3.936 14 13 29.688V33h1v-3.594L5.125 14 10 5.562V18h3v-2.125c2.278-.513 4-2.717 4-5.375s-1.722-4.862-4-5.375V4h12V3H10.312zM11 4h1v2c2.21 0 4 2.015 4 4.5S14.21 15 12 15v2h-1V4zm1 3.5v6c1.38 0 2.5-1.343 2.5-3s-1.12-3-2.5-3zM6 31c-1.49 0-2.51 2-4 2h2c.627-.5 1.255-1 2-1h1c.745 0 1.373.5 2 1h2c-1.49 0-2.51-2-4-2H6z"
      fill="#fff"
    />
    <path d="M8 0v3L1.656 14 11 30.219V31c-1.49 0-2.51-2-4-2H6c-1.49 0-2.51 2-4 2H0v2h2c1.49 0 2.51-2 4-2h1c1.49 0 2.51 2 4 2h2v-3.313L3.937 14l6.376-11H25V0H8z" />
    <path d="M11 4v13h1v-2c2.21 0 4-2.015 4-4.5S14.21 6 12 6V4h-1zm1 3.5c1.38 0 2.5 1.343 2.5 3s-1.12 3-2.5 3v-6z" />
  </svg>
);

export default SvgComponent;