import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5.5 22.5L0 17h11l-5.5 5.5zm0-1.438L8.563 18H2.436L5.5 21.063z" />
    <path d="M9.5 40C7.015 40 5 36.194 5 31.5v-8h2v8C7 35.642 8.12 38 9.5 38s3.5-2.358 3.5-6.5v-23C13 4.358 10.88 2 9.5 2S7 4.358 7 8.5V16H5V8.5C5 3.806 7.015 0 9.5 0h2C13.985 0 17 3.806 17 8.5v23c0 4.694-3.015 8.5-5.5 8.5h-2z" />
    <path d="M5.5 21.063L2.437 18h6.126L5.5 21.063z" fill="#fff" />
  </svg>
);

export default SvgComponent;
