import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M.1 5H10v9.9L.1 5z" />
    <path d="M26.97.757l-6.098 6.1a3.5 3.5 0 10-4.066 4.066l-6.099 6.098a3 3 0 01-4.243 0c-1.171-1.172-.855-3.388.708-4.95L2.929 7.828a6 6 0 000 8.486l2.121 2.121a5 5 0 007.071 0L28.385 2.172 26.97.757zM18.84 6.061a2 2 0 11-2.829 2.828 2 2 0 012.829-2.828z" />
  </svg>
);

export default SvgComponent;