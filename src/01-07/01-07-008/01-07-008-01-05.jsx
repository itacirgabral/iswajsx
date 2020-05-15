import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 17h15v13H6z" />
    <path fill="#fff" d="M8 19h6v9H8z" />
    <path d="M19 3v12h2V3h-2zM14 0v15h2V0h-2zM1.406 9.594L0 11l4 4h2.844L1.406 9.594zM27.594 15.594L22 21.188V24l7-7-1.406-1.406z" />
  </svg>
);

export default SvgComponent;
