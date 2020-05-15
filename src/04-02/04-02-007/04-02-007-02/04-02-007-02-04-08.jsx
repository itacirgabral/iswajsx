import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 0v5H5V1H1V0h5z" />
    <path d="M4.95 3.172L2.12 6l-.707-.707 2.829-2.829.707.708zM3.536 1.757L.707 4.586 0 3.879 2.828 1.05l.708.707z" />
  </svg>
);

export default SvgComponent;
