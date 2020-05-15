import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 0l6 6v21H6V6l6-6z" />
    <path d="M18 10v3H6v-3h12z" fill="#fff" />
    <path d="M2.469 2.219L7 6.75 6 10 .344 4.344l2.125-2.125z" />
  </svg>
);

export default SvgComponent;
