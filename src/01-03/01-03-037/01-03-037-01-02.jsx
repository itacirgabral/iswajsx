import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 15h15v15H14z" />
    <path fill="#fff" d="M16 17h6v11h-6z" />
    <path d="M14 15H0v2h14v-2zM16 15V0h-2v15h2zM5 17l9 9v-2.813L7.844 17H5z" />
  </svg>
);

export default SvgComponent;
