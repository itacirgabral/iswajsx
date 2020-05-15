import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 15h15v15H8zM10 3v12H8V3h2zM15 0v15h-2V0h2z" />
    <path d="M27.594 9.594L29 11l-6 6v-2h-.844l5.438-5.406zM1.406 15.594L8 22.188V25l-8-8 1.406-1.406z" />
  </svg>
);

export default SvgComponent;
