import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 14a8 8 0 100 16 8 8 0 000-16z" />
    <path d="M12 16a6 6 0 000 12V16z" fill="#fff" />
    <path d="M18 0v16.719A7.952 7.952 0 0120 22V0h-2zM1.406 9.594L0 11l5.844 5.844c.427-.51.96-.923 1.5-1.313L1.406 9.594z" />
  </svg>
);

export default SvgComponent;
