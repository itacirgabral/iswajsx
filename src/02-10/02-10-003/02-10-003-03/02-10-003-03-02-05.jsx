import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={40} {...props}>
    <path d="M15 17l-5.5 5.5L4 17h11zm-2.438 1H6.439L9.5 21.063 12.563 18z" />
    <path d="M4.5 40C2.015 40 0 36.194 0 31.5v-23C0 3.806 2.015 0 4.5 0h2C8.985 0 12 3.806 12 8.5V16H7V8.5C7 4.358 5.88 2 4.5 2S2 4.358 2 8.5v23C2 35.642 3.12 38 4.5 38S7 35.642 7 31.5v-8h5v8c0 4.694-3.015 8.5-5.5 8.5h-2z" />
    <path d="M12.563 18L9.5 21.063 6.437 18h6.125z" fill="#fff" />
  </svg>
);

export default SvgComponent;
