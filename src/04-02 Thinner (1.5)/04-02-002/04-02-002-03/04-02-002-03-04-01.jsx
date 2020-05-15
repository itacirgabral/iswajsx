import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 8l5-5-.719-.719L6.594 7H0v1h7z" />
    <path d="M5.406 5L9.72.719 9 0 5 4H0v1h5.406zM18 8l-5-5 .719-.719L18.406 7H25v1h-7z" />
    <path d="M19.594 5L15.28.719 16 0l4 4h5v1h-5.406z" />
  </svg>
);

export default SvgComponent;