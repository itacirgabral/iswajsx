import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={30} {...props}>
    <path d="M8 17h15v13H8zM19.594 3.406L8 15h2.813L21.03 4.812l-1.437-1.406z" />
    <path d="M14 0h2v15h-2zM1.625 15.813L.219 17.218 7 24v-2.813l-5.375-5.375z" />
  </svg>
);

export default SvgComponent;
