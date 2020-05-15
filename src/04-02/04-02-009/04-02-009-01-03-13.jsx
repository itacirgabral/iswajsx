import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v5h1V1h4V0H0zM6.25 3.875A4.006 4.006 0 013.406 2.72L4.125 2a3.009 3.009 0 004.25 0L9.781.594l.719.687L9.094 2.72A4.006 4.006 0 016.25 3.875z" />
    <path d="M6.25 5.875A5.99 5.99 0 012 4.125l.719-.719a4.99 4.99 0 007.062 0L11.187 2l.72.719L10.5 4.125a5.99 5.99 0 01-4.25 1.75z" />
    <path
      d="M9.785 3.426a5 5 0 01-7.071 0l.707-.707a4 4 0 005.657 0l1.414-1.414.707.707-1.414 1.414z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;