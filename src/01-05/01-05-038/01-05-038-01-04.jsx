import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 0v20c8 0 8-8 8-8V8c0-8-8-8-8-8z" />
    <path
      d="M10 1.125v17.813C15.978 18.291 16 12 16 12V8c0-5.383-4.08-6.583-6-6.875z"
      fill="#fff"
    />
    <path d="M7 .156C.012 1.25 0 8 0 8h2c0-2.597 2.93-3.493 5-3.813V.157z" />
  </svg>
);

export default SvgComponent;
