import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 20l-5.5-5.5L4 20h11zm-2.438-1H6.439L9.5 15.937 12.563 19z" />
    <path d="M4.5 0C2.015 0 0 3.806 0 8.5v23C0 36.194 2.015 40 4.5 40h2c2.485 0 5.5-3.806 5.5-8.5V27H7v4.5C7 35.642 5.88 38 4.5 38S2 35.642 2 31.5v-23C2 4.358 3.12 2 4.5 2S7 4.358 7 8.5v5h5v-5C12 3.806 8.985 0 6.5 0h-2z" />
    <path d="M12.563 19L9.5 15.937 6.437 19h6.125z" fill="#fff" />
    <path d="M15 26l-5.5-5.5L4 26h11zm-2.438-1H6.439L9.5 21.937 12.563 25z" />
    <path d="M12.563 25L9.5 21.937 6.437 25h6.125z" fill="#fff" />
  </svg>
);

export default SvgComponent;