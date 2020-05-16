import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={30} {...props}>
    <path d="M8 3h2v12H8zM13 0v15h2V0h-2zM8 17h15v13H8zM1.625 15.813L.219 17.218 7 24v-2.813l-5.375-5.375z" />
  </svg>
);

export default SvgComponent;
