import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 4h15v15H15z" />
    <path fill="#fff" d="M17 6h11v11H17z" />
    <path d="M0 4v2h6V4H0zm10 0v2h5V4h-5zM15 6L.5 9.875l.531 1.938L15 8.092V6z" />
    <path d="M6.719.688L5 1.688 15 19v-3.969L6.719.687z" />
  </svg>
);

export default SvgComponent;
