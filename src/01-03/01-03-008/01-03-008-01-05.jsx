import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={30} {...props}>
    <path d="M4 17h14v13H4z" />
    <path fill="#fff" d="M6 19h6v9H6z" />
    <path d="M17 0h2v15h-2zM.78 7.969L-.062 9.78 11.125 15h4.718L.781 7.969zM20 15v9s0 3-1 3v3s3 0 3-5V15h-2z" />
  </svg>
);

export default SvgComponent;
