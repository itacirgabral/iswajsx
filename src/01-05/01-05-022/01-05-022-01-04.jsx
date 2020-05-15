import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5.781 2.219L0 8v21h12V13L5.781 2.219z" />
    <path d="M5.344 5.469L2 8.812V27h8V13.5L5.344 5.469z" fill="#fff" />
    <path d="M14 20v2h6v-2h-6zM13.438-.063l-2.126 7.907 1.407 2.437L15.375.437l-1.938-.5z" />
  </svg>
);

export default SvgComponent;
