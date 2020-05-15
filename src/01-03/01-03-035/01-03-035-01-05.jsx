import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 17h15v13H14z" />
    <path fill="#fff" d="M16 19h6v9h-6z" />
    <path d="M13 15H0v2h13v-2zM16 15V0h-2v15h2z" />
    <path d="M3.406 10.563L1.97 11.969 13 23v-2.813l-9.594-9.625z" />
  </svg>
);

export default SvgComponent;
