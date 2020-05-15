import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M39.657 3.1a4 4 0 010 5.657l-.707.707-1.414-1.414.707-.707a2 2 0 000-2.828l-.707-.707a3 3 0 00-4.243 0l-7.071 7.07 1.26-4.618a1.982 1.982 0 00-.553-1.745 3 3 0 00-4.243 0l-7.07 7.07 1.259-4.618a1.982 1.982 0 00-.553-1.745 3 3 0 00-4.242 0l-1.415 1.414c-2.32 2.321-3.535 9.192-3.535 9.192L.059 8.758s6.87-1.215 9.192-3.536l1.414-1.414a5 5 0 017.072 0 3.99 3.99 0 011.016 1.812l2.52-2.52a5 5 0 017.07 0 3.99 3.99 0 011.017 1.812l2.519-2.519a5 5 0 017.07 0l.708.708z" />
    <path d="M42.485 13H34V4.515l1.414 1.414v5.657h5.657L42.485 13z" />
  </svg>
);

export default SvgComponent;