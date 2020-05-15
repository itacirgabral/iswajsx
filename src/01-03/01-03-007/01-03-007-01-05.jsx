import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 17h15v13H4z" />
    <path fill="#fff" d="M6 19h6v9H6z" />
    <path d="M17 0h2v15h-2zM.78 7.969L-.062 9.78 11.125 15h4.718L.781 7.969zM25.375 15.813L20 21.186V24l6.781-6.781-1.406-1.407z" />
  </svg>
);

export default SvgComponent;
