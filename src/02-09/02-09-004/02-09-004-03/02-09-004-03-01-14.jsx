import React from "react";

const SvgComponent = (props) => (
  <svg width={34} height={45} {...props}>
    <path d="M15 0v16l8-8-8-8z" />
    <path d="M15 7v2H8.5A6.5 6.5 0 002 15.5 4.5 4.5 0 006.5 20H18a6 6 0 016 6 5.992 5.992 0 01-1.75 4.25l-3.5 2.5A5.992 5.992 0 0017 37a4 4 0 004 4h13v4H23a8 8 0 01-5.656-13.656l2.781-3.219A2.996 2.996 0 0021 26a2 2 0 00-2-2H8.5a8.5 8.5 0 010-17H15z" />
  </svg>
);

export default SvgComponent;
