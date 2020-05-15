import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17 9h9.9l-1.415 1.414h-7.07v7.071L17 18.9V9z" />
    <path d="M2.15 6.879l13.436 13.435a3 3 0 004.242-4.243l4.243-4.243c1.953 1.953 1.636 5.435-.707 7.779l-2.121 2.12a5 5 0 01-7.071 0L.737 8.294 2.15 6.879z" />
    <path d="M26.9.515l.707.707-6.364 6.364-.707-.707L26.899.515zm-12.021 12.02l.707.708L4.272 24.556l-.707-.707 11.314-11.313z" />
  </svg>
);

export default SvgComponent;
