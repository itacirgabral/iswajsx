import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0h8v18H8z" />
    <path fill="#fff" d="M9 1h6v16H9z" />
    <path d="M8 0v4H2v4H0V0h8zM20.25 6.938l-1.406 1.406L16 11.156V14l5.656-5.656-1.406-1.406z" />
  </svg>
);

export default SvgComponent;