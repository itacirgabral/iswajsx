import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M21 4l-4-4-.719.719L19.594 4 16.28 7.281 17 8l4-4z" />
    <path d="M17 2h-5v1h5V2zM17 5h-5v1h5V5zM9 4L5 0l-.719.719L7.594 4 4.28 7.281 5 8l4-4z" />
    <path d="M5 2H0v1h5V2zM5 5H0v1h5V5z" />
  </svg>
);

export default SvgComponent;
