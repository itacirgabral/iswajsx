import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13 5H5.222L13 12.778V5z" />
    <path d="M23.607.757C21.907-.94 17.594.512 13.42 4.006l.906.906c3.492-2.79 6.346-4.26 7.16-3.448 1.17 1.172-2.312 6.554-7.779 12.021-5.467 5.468-10.85 8.95-12.02 7.778-.783-.782.554-3.452 3.137-6.761l-.95-.95c-3.346 3.891-4.808 7.92-3.248 9.48l1.414 1.413c2.148 2.148 7.297-.933 12.374-6.01l4.95-4.95C24.05 8.8 26.34 3.491 23.607.757z" />
    <path d="M9 9H1.222L9 16.778V9z" />
  </svg>
);

export default SvgComponent;