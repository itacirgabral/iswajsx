import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11.5 25.5L17 20H6l5.5 5.5z" />
    <path d="M7.5 40c2.485 0 4.5-3.806 4.5-8.5v-5h-2v5c0 4.142-1.12 6.5-2.5 6.5S4 35.642 4 31.5v-23C4 4.358 6.12 2 7.5 2S10 4.358 10 8.5V13h2V8.5C12 3.806 9.985 0 7.5 0h-2C3.015 0 0 3.806 0 8.5v23C0 36.194 3.015 40 5.5 40h2z" />
    <path d="M11.5 19.5L17 14H6l5.5 5.5z" />
  </svg>
);

export default SvgComponent;
