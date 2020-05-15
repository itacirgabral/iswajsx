import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 17h15v13H5z" />
    <path fill="#fff" d="M7 19h6v9H7z" />
    <path d="M18 0h2v15h-2zM7.406 4.406L5.97 5.813 15.187 15H18L7.406 4.406zM1.406 10.594L0 12l3 3h2.813l-4.407-4.406z" />
  </svg>
);

export default SvgComponent;
