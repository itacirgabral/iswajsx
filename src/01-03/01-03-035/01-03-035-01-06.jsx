import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={30} {...props}>
    <path d="M14 17h15v13H14zM13 15H0v2h13v-2zM16 15V0h-2v15h2z" />
    <path d="M3.406 10.563L1.97 11.969 13 23v-2.813l-9.594-9.625z" />
  </svg>
);

export default SvgComponent;
