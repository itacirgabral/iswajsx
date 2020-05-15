import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 17h15v13H14z" />
    <path fill="#fff" d="M16 19h11v9H16z" />
    <path d="M13 15H0v2h13v-2zM16 15V0h-2v15h2zM5 17l8 8v-2.813L7.844 17H5z" />
  </svg>
);

export default SvgComponent;
