import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={17} {...props}>
    <path d="M0 8V1l7 7H0z" />
    <path d="M11.5 0a9.956 9.956 0 00-7.063 2.938L3.125 4.125l.75.75 1.25-1.25A8.988 8.988 0 0111.5 1c2.485 0 4.746.996 6.375 2.625L22.281 8 23 7.281l-4.438-4.343A9.956 9.956 0 0011.5 0zM0 17v-7l7 7H0z" />
    <path d="M11.5 9a9.956 9.956 0 00-7.063 2.938l-1.312 1.187.75.75 1.25-1.25A8.988 8.988 0 0111.5 10c2.485 0 4.746.996 6.375 2.625L22.281 17l.719-.719-4.438-4.343A9.956 9.956 0 0011.5 9z" />
  </svg>
);

export default SvgComponent;
