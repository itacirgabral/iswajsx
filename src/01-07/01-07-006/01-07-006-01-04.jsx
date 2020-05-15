import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 17h15v13H6z" />
    <path fill="#fff" d="M8 19h11v9H8z" />
    <path d="M9.406 3.406L7.97 4.812 18.187 15H21L9.406 3.406z" />
    <path d="M13 0v15h2V0h-2zM1.406 9.594L0 11l4 4h2.844L1.406 9.594z" />
  </svg>
);

export default SvgComponent;
