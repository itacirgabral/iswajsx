import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 4v1H4.5a3.5 3.5 0 100 7H13v2H5A5 5 0 115 4h5z" />
    <path d="M9.75.25L14 4.5 9.75 8.75l-.688-.719 3.5-3.531-3.5-3.531L9.75.25z" />
  </svg>
);

export default SvgComponent;