import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4.406 4.594L3 6l6.375 6.375-8.5 8.469 9.188 9.187-9.907 9.907 1.438 1.406L12.906 30.03 3.72 20.844l8.469-8.469-7.782-7.781z" />
    <path d="M8.656.344L7.25 1.75l10.594 10.625-8.469 8.469 9.188 9.187L4.405 44.188l1.438 1.406L21.375 30.03l-9.188-9.187 8.5-8.469L8.658.344z" />
    <path
      d="M7.25 1.75L4.406 4.594l7.782 7.781-8.47 8.469 9.188 9.187L1.594 41.344l2.812 2.843 14.157-14.156-9.188-9.187 8.469-8.469L7.25 1.75z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;