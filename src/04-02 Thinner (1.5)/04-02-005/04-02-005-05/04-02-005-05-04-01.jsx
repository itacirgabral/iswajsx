import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5.5 0C3.015 0 1 1.79 1 4H0v1h1c0 2.21 2.015 4 4.5 4S10 7.21 10 5h1V4h-1c0-2.21-2.015-4-4.5-4zm0 1.5C7.433 1.5 9 2.62 9 4H2c0-1.38 1.567-2.5 3.5-2.5zM2 5h7c0 1.38-1.567 2.5-3.5 2.5S2 6.38 2 5zM17.5 0C15.015 0 13 1.79 13 4h-1v1h1c0 2.21 2.015 4 4.5 4S22 7.21 22 5h1V4h-1c0-2.21-2.015-4-4.5-4zm0 1.5C19.433 1.5 21 2.62 21 4h-7c0-1.38 1.567-2.5 3.5-2.5zM14 5h7c0 1.38-1.567 2.5-3.5 2.5S14 6.38 14 5z" />
  </svg>
);

export default SvgComponent;