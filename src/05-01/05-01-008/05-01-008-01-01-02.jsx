import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M42 0L0 6v5l42-9V0zM33 10v1h5.5a3.5 3.5 0 110 7H30v2h8a5 5 0 100-10h-5z" />
    <path d="M33.25 6.25L29 10.5l4.25 4.25.688-.719-3.5-3.531 3.5-3.531-.688-.719z" />
  </svg>
);

export default SvgComponent;