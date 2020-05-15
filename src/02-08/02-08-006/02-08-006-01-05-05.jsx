import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 17l4.5 4.5L9 17H0zm1.688.688h5.625L4.5 20.5l-2.813-2.813zM7 0a3 3 0 00-3 3v10c0 1.49-2 4-2 4h5s-2-2.51-2-4V3a2 2 0 114 0v4h1V3a3 3 0 00-3-3zM10 17l4.5 4.5L19 17h-9zm1.688.688h5.624L14.5 20.5l-2.813-2.813zM17 0a3 3 0 00-3 3v10c0 1.49-2 4-2 4h5s-2-2.51-2-4V3a2 2 0 014 0v4h1V3a3 3 0 00-3-3z" />
    <path
      d="M1.688 17.688L4.5 20.5l2.813-2.813H1.688zM11.688 17.688L14.5 20.5l2.813-2.813h-5.625z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
