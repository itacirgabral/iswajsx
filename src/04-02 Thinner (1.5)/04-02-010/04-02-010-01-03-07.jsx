import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 1v5h1V2h4V1H0z" />
    <path d="M9 0v2.5A3.5 3.5 0 015.5 6C3.758 6.005 2.798 4.81 2 3.719V3h.719c.737.524 1.487 1.034 2.781 1C6.88 4 8 3.328 8 2.5V0h1z" />
  </svg>
);

export default SvgComponent;
