import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 20l-5.5 5.5L4 20h11zm-2.438 1H6.439L9.5 24.063 12.563 21z" />
    <path d="M4.5 40C2.015 40 0 36.194 0 31.5v-23C0 3.806 2.015 0 4.5 0h2C8.985 0 12 3.806 12 8.5V13H7V8.5C7 4.358 5.88 2 4.5 2S2 4.358 2 8.5v23C2 35.642 3.12 38 4.5 38S7 35.642 7 31.5v-5h5v5c0 4.694-3.015 8.5-5.5 8.5h-2z" />
    <path d="M12.563 21L9.5 24.063 6.437 21h6.125z" fill="#fff" />
    <path d="M15 14l-5.5 5.5L4 14h11zm-2.438 1H6.439L9.5 18.063 12.563 15z" />
    <path d="M12.563 15L9.5 18.063 6.437 15h6.125z" fill="#fff" />
  </svg>
);

export default SvgComponent;