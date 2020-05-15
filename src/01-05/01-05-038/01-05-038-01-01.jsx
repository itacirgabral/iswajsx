import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 0v20c8 0 8-8 8-8V8c0-8-8-8-8-8z" />
    <path
      d="M10 1.125v17.813C15.978 18.291 16 12 16 12V8c0-5.383-4.08-6.583-6-6.875z"
      fill="#fff"
    />
    <path d="M9 4V0C0 0 0 8 0 8h2c0-4 7-4 7-4z" />
  </svg>
);

export default SvgComponent;
