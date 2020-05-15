import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M.1 0H10v9.9L.1 0z" />
    <path d="M27.678 2.121L19.899 9.9a1 1 0 01-1.414 0 1.015 1.015 0 01-.31-.707v-4.64l-1.988 1.989-5.48 5.48a3 3 0 01-4.243 0c-1.171-1.172-.855-3.388.708-4.95L2.929 2.828a6 6 0 000 8.486l2.121 2.121a5 5 0 007.071 0l4.088-4.088a2.98 2.98 0 00.862 1.967 3 3 0 004.243 0l7.778-7.778-1.414-1.415z" />
  </svg>
);

export default SvgComponent;
