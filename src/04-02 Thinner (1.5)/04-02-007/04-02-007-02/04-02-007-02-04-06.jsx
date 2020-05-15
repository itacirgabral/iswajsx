import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 6V1H5v4H1v1h5z" />
    <path d="M4.95 2.828L2.12 0l-.707.707 2.829 2.829.707-.708zM3.536 4.243L.707 1.414 0 2.121 2.828 4.95l.708-.707z" />
  </svg>
);

export default SvgComponent;