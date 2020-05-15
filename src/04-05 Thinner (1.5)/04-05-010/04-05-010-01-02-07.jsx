import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 4L5 0l-.719.719L7.594 4 4.28 7.281 5 8l4-4z" />
    <path d="M0 3.5v1h5v-1H0z" />
  </svg>
);

export default SvgComponent;
