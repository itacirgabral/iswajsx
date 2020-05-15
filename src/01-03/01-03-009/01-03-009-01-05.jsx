import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M1 17h15v13H1z" />
    <path fill="#fff" d="M3 19h6v9H3z" />
    <path d="M.88 7.969L.038 9.78 11.225 15h4.718L.881 7.969zM9 0h2v10H9zM22.375 15.813L17 21.186V24l6.781-6.781-1.406-1.407z" />
  </svg>
);

export default SvgComponent;
