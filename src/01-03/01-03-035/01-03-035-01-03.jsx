import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={30} {...props}>
    <path d="M14 15h15v15H14zM14 15H0v2h14v-2zM16 15V0h-2v15h2z" />
    <path d="M3.406 10.563L1.97 11.969 14 24v-2.813L3.406 10.563z" />
  </svg>
);

export default SvgComponent;
