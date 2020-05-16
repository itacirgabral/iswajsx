import React from "react";

const SvgComponent = (props) => (
  <svg width={8} height={8} {...props}>
    <path d="M8.016 8.016V.946H7V7H.945v1.016h7.071z" />
    <path d="M5.542 4.834L1.299.592l-.707.707 4.242 4.243.708-.708z" />
  </svg>
);

export default SvgComponent;
