import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={9} {...props}>
    <path d="M5.5 0C3.015 0 1 1.79 1 4H0v1h1c0 2.21 2.015 4 4.5 4S10 7.21 10 5h1V4h-1c0-2.21-2.015-4-4.5-4zm0 2C7.433 2 9 2.895 9 4H2c0-1.105 1.567-2 3.5-2zM2 5h7c0 1.105-1.567 2-3.5 2S2 6.105 2 5zM17.5 0C15.015 0 13 1.79 13 4h-1v1h1c0 2.21 2.015 4 4.5 4S22 7.21 22 5h1V4h-1c0-2.21-2.015-4-4.5-4zm0 2c1.933 0 3.5.895 3.5 2h-7c0-1.105 1.567-2 3.5-2zM14 5h7c0 1.105-1.567 2-3.5 2S14 6.105 14 5z" />
  </svg>
);

export default SvgComponent;
