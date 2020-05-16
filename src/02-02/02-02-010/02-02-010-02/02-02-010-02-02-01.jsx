import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={10} {...props}>
    <path d="M5 4.281l-5 5L.719 10 5 5.719l4 4 4-4L17.281 10 18 9.281l-5-5-4 4-4-4z" />
    <path d="M5 .281l-5 5L.719 6 5 1.719l4 4 4-4L17.281 6 18 5.281l-5-5-4 4-4-4z" />
  </svg>
);

export default SvgComponent;
