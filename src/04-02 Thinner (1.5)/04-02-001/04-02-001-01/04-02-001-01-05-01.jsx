import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={10} {...props}>
    <path d="M3 0l-.719.719 7 7L10 7 3 0zM.719 2.281L0 3l7 7 .719-.719-7-7z" />
  </svg>
);

export default SvgComponent;
