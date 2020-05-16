import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={10} {...props}>
    <path d="M7 10l.719-.719-7-7L0 3l7 7zM9.281 7.719L10 7 3 0l-.719.719 7 7z" />
  </svg>
);

export default SvgComponent;
