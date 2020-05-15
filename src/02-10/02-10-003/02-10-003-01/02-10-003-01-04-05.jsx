import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5.5 16.5L0 11h11l-5.5 5.5z" />
    <path d="M9.5 25c-2.304 0-4.173-3.281-4.438-7.5h1.97C7.196 21.161 8.233 24 9.5 24c1.38 0 2.5-3.358 2.5-7.5v-8C12 4.358 10.88 1 9.5 1S7 4.358 7 8.5V10H5V8.5C5 3.806 7.015 0 9.5 0h2C13.985 0 16 3.806 16 8.5v8c0 4.694-2.015 8.5-4.5 8.5h-2z" />
  </svg>
);

export default SvgComponent;
