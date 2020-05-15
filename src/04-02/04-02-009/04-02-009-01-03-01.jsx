import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 6V1h1v4h4v1H0zM6.25 2.125A4.006 4.006 0 003.406 3.28L4.125 4a3.009 3.009 0 014.25 0l1.406 1.406.719-.687L9.094 3.28A4.006 4.006 0 006.25 2.125z" />
    <path d="M6.25.125A5.99 5.99 0 002 1.875l.719.719a4.99 4.99 0 017.062 0L11.187 4l.72-.719L10.5 1.875A5.99 5.99 0 006.25.125z" />
    <path
      d="M9.785 2.574a5 5 0 00-7.071 0l.707.707a4 4 0 015.657 0l1.414 1.414.707-.707-1.414-1.414z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
