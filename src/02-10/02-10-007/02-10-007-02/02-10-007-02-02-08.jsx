import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={16} {...props}>
    <path d="M0 7.281l2.5-2.5 2.5 2.5L4.281 8 2.5 6.219.719 8 0 7.281zM8 16v-2h2v2H8zm-4-1v-2h2v2H4zM4 3V1h2v2H4zm4-1V0h2v2H8zM0 11.281l2.5-2.5 2.5 2.5-.719.719L2.5 10.219.719 12 0 11.281z" />
  </svg>
);

export default SvgComponent;
