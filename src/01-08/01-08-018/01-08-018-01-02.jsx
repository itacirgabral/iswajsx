import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 15h15v15H6z" />
    <path fill="#fff" d="M8 17h6v11H8z" />
    <path d="M13 0h2v15h-2zM2 9L.594 10.406 6 15.812V15h2L2 9zM27.375 15.813L21 22.186V25l7.781-7.781-1.406-1.407z" />
  </svg>
);

export default SvgComponent;
