import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={25} {...props}>
    <path d="M3.414 3.586L2 5l2.828 2.828-4.242 4.243 4.242 4.243-3.535 3.535 1.414 1.414 4.95-4.95-4.243-4.242 4.243-4.243-4.243-4.242z" />
    <path d="M6.95.05L5.536 1.464l6.363 6.364-4.242 4.243 4.242 4.243-7.07 7.07L6.242 24.8l8.485-8.485-4.243-4.243 4.243-4.243L6.95.05z" />
    <path
      d="M5.536 1.464L3.414 3.586l4.243 4.242-4.243 4.243 4.243 4.243-4.95 4.95 2.121 2.12 7.071-7.07-4.242-4.243 4.242-4.243-6.363-6.364z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
