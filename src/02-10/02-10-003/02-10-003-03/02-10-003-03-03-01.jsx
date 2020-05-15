import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 23h2l3.5-3.5L13 23h2l-5.5-5.5L4 23z" />
    <path d="M4.5 0C2.015 0 0 3.806 0 8.5v23C0 36.194 2.015 40 4.5 40h2c2.485 0 5.5-3.806 5.5-8.5V24H7v7.5C7 35.642 5.88 38 4.5 38S2 35.642 2 31.5v-23C2 4.358 3.12 2 4.5 2S7 4.358 7 8.5v8h5v-8C12 3.806 8.985 0 6.5 0h-2z" />
  </svg>
);

export default SvgComponent;
