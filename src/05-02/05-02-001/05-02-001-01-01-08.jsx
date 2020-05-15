import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M18.594 0L0 18.594V49h2V19.406l18-18L18.594 0z" />
    <path
      d="M17.156 0L0 17.156v1.438L18.594 0h-1.438zM20 1.406l-18 18V49h1V19.812L20 2.845V1.406z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;