import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v2c0 2.21 2.015 4 4.5 4S9 4.21 9 2V0H0zm1 2h7c0 1.105-1.567 2-3.5 2S1 3.105 1 2zM16.5 6C14.015 6 12 4.21 12 2V0h9v2c0 2.21-2.015 4-4.5 4zm0-2c1.933 0 3.5-.895 3.5-2h-7c0 1.105 1.567 2 3.5 2z" />
  </svg>
);

export default SvgComponent;
