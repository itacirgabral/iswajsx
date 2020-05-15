import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M3.05 3.1a4 4 0 000 5.657l.707.707.707-.707-.707-.707a3 3 0 010-4.242l.707-.707c1.172-1.172 3.388-.855 4.95.707l6.364 6.364c2.322 2.321 3.536 9.192 3.536 9.192l7.07-7.071s-6.87-1.214-9.192-3.536l-6.364-6.364a5 5 0 00-7.07 0l-.708.708z" />
    <path d="M.222 13H8V5.222L.222 13zm2.43-1.016l4.332-4.331v4.33H2.653z" />
  </svg>
);

export default SvgComponent;
