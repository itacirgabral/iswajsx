import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 5h42v4H0V5zM54 5l-5 5-.719-.719L52.563 5 48.28.719 49 0l5 5z" />
    <path d="M50 7V6h-6v1h6zM50 4V3h-6v1h6z" />
  </svg>
);

export default SvgComponent;