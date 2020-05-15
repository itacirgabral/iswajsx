import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5.666 57.991L57.992 5.665l-1.414-1.414L4.252 56.577l1.414 1.414zM1.423 53.749L53.75 1.423 52.335.009.009 52.335l1.414 1.414z" />
    <path
      d="M4.252 56.577L56.578 4.251l-2.829-2.828L1.423 53.749l2.829 2.828z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
