import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 0C0 0 0 8 0 8c0 .357.034.678.094 1H3c0-5 9-5 9-5v11h8V0h-8z" />
    <path fill="#fff" d="M13 1h6v13h-6z" />
    <path d="M24.25 3.938L20 8.188V11l5.656-5.656-1.406-1.407z" />
  </svg>
);

export default SvgComponent;
