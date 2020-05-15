import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7.5 0l-7 7h2.719l4.219-4.25L11.688 7H14.5l-7-7zM4 7v8.969L13.063 25l1.406-1.406L6 15.125V7H4z" />
    <path d="M9 7v6.875l7.594 7.594L18 20.062l-7-7.03V7H9z" />
    <path d="M6 7v8.125l8.469 8.469 2.125-2.125L9 13.875V7H6z" fill="#fff" />
  </svg>
);

export default SvgComponent;