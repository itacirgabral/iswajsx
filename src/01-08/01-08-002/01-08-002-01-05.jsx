import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 12a8 8 0 100 16 8 8 0 000-16z" />
    <path d="M14 14a6 6 0 000 12V14z" fill="#fff" />
    <path d="M19 0v11.344a9.906 9.906 0 012 1.531V0h-2zM8 3v9a9.978 9.978 0 012-1.188V3H8zM2 11L.594 12.406l4.062 4.063a10.02 10.02 0 01.938-1.875L2 11z" />
  </svg>
);

export default SvgComponent;
