import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 14v15h8V14H8z" />
    <path fill="#fff" d="M9 15h3v13H9z" />
    <path d="M18.281 6.063L14.844 12h2.312L20 7.062l-1.719-1zM12 0h2v12h-2zM7.719 6.063L6 7.063 8.844 12h2.312L7.72 6.062zM0 14h6v2H0zM21.594 17.594L17 22.187V25l6-6-1.406-1.406z" />
  </svg>
);

export default SvgComponent;
