import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M1 15h15v15H1z" />
    <path fill="#fff" d="M3 17h6v11H3z" />
    <path d="M.88 7.969L.038 9.78 11.225 15h4.718L.881 7.969zM9 0h2v10H9zM22.375 15.813L16 22.186V25l7.781-7.781-1.406-1.407z" />
  </svg>
);

export default SvgComponent;
