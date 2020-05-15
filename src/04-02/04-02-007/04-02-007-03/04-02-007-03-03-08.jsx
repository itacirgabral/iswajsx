import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 0v5H5V1H1V0h5z" />
    <path d="M4.95 3.172L2.122 6l-.707-.707 2.828-2.829.707.708zM3.536 1.757L.707 4.586 0 3.879 2.83 1.05l.707.707zM3 11V6h1v4h4v1H3z" />
    <path d="M4.05 7.828L6.88 5l.707.707-2.829 2.829-.707-.708zM5.465 9.243l2.828-2.829.707.707L6.172 9.95l-.707-.707z" />
  </svg>
);

export default SvgComponent;
