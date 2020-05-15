import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path
      d="M18.5 3a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 1a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
      fill="#fff"
    />
    <path
      d="M18 0v2.719L24.531 14l-8.75 15.156C16.482 28.613 17.175 28 18 28h1c1.49 0 2.51 2 4 2h2v1h-2c-1.49 0-2.51-2-4-2h-1c-1.49 0-2.51 2-4 2v-1l9.344-16L17 3V0h1zm-3.313 3l6.376 11L12 29.688V33h-1v-3.594L19.875 14 14.094 4H0V3h14.688zM19 31c1.49 0 2.51 2 4 2h-2c-.627-.5-1.255-1-2-1h-1c-.745 0-1.373.5-2 1h-2c1.49 0 2.51-2 4-2h1z"
      fill="#fff"
    />
    <path d="M17 0v3l6.344 11L14 30.219V31c1.49 0 2.51-2 4-2h1c1.49 0 2.51 2 4 2h2v2h-2c-1.49 0-2.51-2-4-2h-1c-1.49 0-2.51 2-4 2h-2v-3.313L21.063 14 14.688 3H0V0h17z" />
    <path d="M18.5 4a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
  </svg>
);

export default SvgComponent;
