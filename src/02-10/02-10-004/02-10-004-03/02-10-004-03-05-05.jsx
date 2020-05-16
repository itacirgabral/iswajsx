import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={40} {...props}>
    <path d="M5.5 25.5L0 20h11l-5.5 5.5zm0-1.438L8.563 21H2.436L5.5 24.063z" />
    <path d="M9.5 40C7.015 40 5 36.194 5 31.5v-5h2v5C7 35.642 8.12 38 9.5 38s3.5-2.358 3.5-6.5v-23C13 4.358 10.88 2 9.5 2S7 4.358 7 8.5V13H5V8.5C5 3.806 7.015 0 9.5 0h2C13.985 0 17 3.806 17 8.5v23c0 4.694-3.015 8.5-5.5 8.5h-2z" />
    <path d="M5.5 24.063L2.437 21h6.126L5.5 24.063z" fill="#fff" />
    <path d="M5.5 19.5L0 14h11l-5.5 5.5zm0-1.438L8.563 15H2.436L5.5 18.063z" />
    <path d="M5.5 18.063L2.437 15h6.126L5.5 18.063z" fill="#fff" />
  </svg>
);

export default SvgComponent;
