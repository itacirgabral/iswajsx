import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v4h.5C7.404 4 13 10.044 13 17.5V36h5V17.5C18 7.835 10.165 0 .5 0H0z" />
  </svg>
);

export default SvgComponent;
