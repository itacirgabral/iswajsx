import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={10} {...props}>
    <path d="M7 0l.719.719-7 7L0 7l7-7zM9.281 2.281L10 3l-7 7-.719-.719 7-7zM16 0l-.719.719 7 7L23 7l-7-7zM13.719 2.281L13 3l7 7 .719-.719-7-7z" />
  </svg>
);

export default SvgComponent;
