import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5.5 12.5L11 18H0l5.5-5.5z" />
    <path d="M10 0c2.761 0 5 5.373 5 12v9c0 6.075-2.015 11-4.5 11h-2C5.462 32 3 26.18 3 19h5.063c.246 6.282 1.241 11 2.437 11 1.38 0 2.5-6.268 2.5-14S11.88 2 10.5 2c-1.097 0-2.007 3.995-2.344 9.5H3C3.155 5.108 6.233 0 10 0z" />
  </svg>
);

export default SvgComponent;