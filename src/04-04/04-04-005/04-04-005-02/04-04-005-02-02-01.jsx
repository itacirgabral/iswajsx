import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 4c0 1.657 2.91 3 6.5 3S17 5.657 17 4s-2.91-3-6.5-3S4 2.343 4 4zm6.5-1c2.485 0 4.5.448 4.5 1s-2.015 1-4.5 1S6 4.552 6 4s2.015-1 4.5-1zM4 0a4 4 0 100 8V7C2.895 7 2 5.657 2 4s.895-3 2-3V0zM17 0v1c1.105 0 2 1.343 2 3s-.895 3-2 3v1a4 4 0 100-8z" />
  </svg>
);

export default SvgComponent;