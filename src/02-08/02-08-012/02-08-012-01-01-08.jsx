import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M23 10.9V1h-9.9l9.9 9.9z" />
    <path d="M18.757 6.657l-8.485 8.485a4 4 0 01-5.657 0l-1.414-1.414c-2.734-2.734-3.05-6.85-.707-9.192l4.95 4.95c-1.562 1.561-2.196 3.46-1.415 4.242a2 2 0 002.829 0l8.485-8.485 1.414 1.414z" />
    <path d="M22.293 18.678l-.707.707L3.2 1l.707-.707 18.385 18.385z" />
  </svg>
);

export default SvgComponent;