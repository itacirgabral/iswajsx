import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 5H.1l9.9 9.9V5zM8.984 6.016v6.453L2.53 6.016h6.453z" />
    <path d="M26.97.757l-6.098 6.1a3.5 3.5 0 10-4.066 4.066l-6.099 6.098a3 3 0 01-4.243 0c-1.171-1.172-.855-3.388.708-4.95L2.929 7.828a6 6 0 000 8.486l2.121 2.121a5 5 0 007.071 0L28.385 2.172 26.97.757zM18.84 6.061a2 2 0 11-2.829 2.828 2 2 0 012.829-2.828z" />
    <path d="M8.984 6.016H2.53l6.453 6.453V6.016z" fill="#fff" />
  </svg>
);

export default SvgComponent;