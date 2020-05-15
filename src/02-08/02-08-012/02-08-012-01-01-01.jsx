import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 7l7-7 7 7H5zM11 7v12a4 4 0 004 4h2c3.866 0 7-2.686 7-6h-7c0 2.21-.895 4-2 4a2 2 0 01-2-2V7h-2z" />
    <path d="M0 13v1h26v-1H0z" />
  </svg>
);

export default SvgComponent;
