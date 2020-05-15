import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M1 0l42 6v5L1 2V0zM10 10v1H4.5a3.5 3.5 0 100 7H13v2H5a5 5 0 110-10h5z" />
    <path d="M9.75 6.25L14 10.5l-4.25 4.25-.688-.719 3.5-3.531-3.5-3.531.688-.719z" />
  </svg>
);

export default SvgComponent;
