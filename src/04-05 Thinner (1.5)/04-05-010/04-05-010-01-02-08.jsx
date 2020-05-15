import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 0v5.656H6V1H1.344V0H7z" />
    <path d="M3.813 2.469L.28 6 1 6.719l3.531-3.532-.718-.718z" />
  </svg>
);

export default SvgComponent;