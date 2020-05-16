import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={10} {...props}>
    <path d="M.243 1.657l5.656 5.657a3 3 0 004.243 0 2.98 2.98 0 00.862-1.967l3.38 3.38a4 4 0 005.658 0 6 6 0 000-8.484l-1.415 1.414a4 4 0 010 5.657 2 2 0 01-2.828 0L9.037.552v4.64c0 .256-.114.512-.31.707a1 1 0 01-1.413 0L1.657.243.243 1.657z" />
  </svg>
);

export default SvgComponent;
