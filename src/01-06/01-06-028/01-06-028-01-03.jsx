import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 14a8 8 0 110 16 8 8 0 010-16z" />
    <path d="M2 0v16.719A7.952 7.952 0 000 22V0h2zM18.594 9.594L20 11l-5.844 5.844c-.427-.51-.96-.923-1.5-1.313l5.938-5.937z" />
  </svg>
);

export default SvgComponent;
