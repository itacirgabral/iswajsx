import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L0 8h16L8 0zM4 8v11.656L14.344 30l1.406-1.406L6 18.844V8H4z" />
    <path d="M10 8v9.156l8.594 8.594L20 24.344l-8-8V8h-2z" />
    <path d="M6 8v10.844l9.75 9.75 2.844-2.844L10 17.156V8H6z" fill="#fff" />
  </svg>
);

export default SvgComponent;