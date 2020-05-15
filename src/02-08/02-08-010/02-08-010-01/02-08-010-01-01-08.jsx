import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M25 9.9V0h-9.9L25 9.9z" />
    <path d="M20.757 5.657L10.151 16.263a4 4 0 01-5.657 0L3.08 14.85C.346 12.116.03 8 2.373 5.657l4.95 4.95c-1.563 1.562-2.196 3.461-1.415 4.242a2 2 0 002.829 0l3.27-3.27a3.5 3.5 0 114.066-4.066l3.27-3.27 1.414 1.414zm-6.717 1.06a2 2 0 10-2.829 2.829 2 2 0 002.829-2.828z" />
  </svg>
);

export default SvgComponent;
