import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 1v5H8V2H4V1h5z" />
    <path d="M0 0v2.5A3.5 3.5 0 003.5 6c1.742.005 2.702-1.19 3.5-2.281V3h-.719c-.737.524-1.487 1.034-2.781 1C2.12 4 1 3.328 1 2.5V0H0z" />
  </svg>
);

export default SvgComponent;
