import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13 3v12l6-6-6-6z" />
    <path d="M25 4.5C25 2.015 21.194 0 16.5 0h-8C3.806 0 0 2.015 0 4.5v2c0 2.022 2.532 3.714 6 4.281V6.844C3.1 6.498 1 5.585 1 4.5 1 3.12 4.358 2 8.5 2h8C20.642 2 24 3.12 24 4.5c0 .957-1.624 1.77-4 2.188v3.906c2.94-.706 5-2.273 5-4.094v-2z" />
    <path d="M7 3v12l6-6-6-6z" />
  </svg>
);

export default SvgComponent;
