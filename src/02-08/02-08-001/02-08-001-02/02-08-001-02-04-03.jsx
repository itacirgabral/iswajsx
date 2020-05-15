import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M.1 16L10 6.1V16H.1z" />
    <path d="M3.636 3.98a5 5 0 000 7.07l.707.707 1.414-1.414-.707-.707a3 3 0 010-4.243l2.122-2.12c1.171-1.172 3.387-.856 4.95.706l1.414 1.414c3.162 3.163 4.242 12.728 4.242 12.728l9.9-9.9S18.112 7.142 14.95 3.98l-1.414-1.414C11.192.222 7.71-.095 5.757 1.858L3.636 3.979z" />
  </svg>
);

export default SvgComponent;
