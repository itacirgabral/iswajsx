import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={40} {...props}>
    <path d="M0 20l5.5-5.5L11 20H0zm2.438-1h6.124L5.5 15.937 2.437 19z" />
    <path d="M10.5 0C12.985 0 15 3.806 15 8.5v23c0 4.694-2.015 8.5-4.5 8.5h-2C6.015 40 3 36.194 3 31.5V27h5v4.5c0 4.142 1.12 6.5 2.5 6.5s2.5-2.358 2.5-6.5v-23C13 4.358 11.88 2 10.5 2S8 4.358 8 8.5v5H3v-5C3 3.806 6.015 0 8.5 0h2z" />
    <path d="M2.438 19L5.5 15.937 8.563 19H2.436z" fill="#fff" />
    <path d="M0 26l5.5-5.5L11 26H0zm2.438-1h6.124L5.5 21.937 2.437 25z" />
    <path d="M2.438 25L5.5 21.937 8.563 25H2.436z" fill="#fff" />
  </svg>
);

export default SvgComponent;
