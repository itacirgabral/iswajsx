import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M20 17l-4.5 4.5L11 17h9zm-1.688.688h-5.625L15.5 20.5l2.813-2.813zM13 0a3 3 0 013 3v10c0 1.49 2 4 2 4h-5s2-2.51 2-4V3a2 2 0 10-4 0v4h-1V3a3 3 0 013-3zM10 17l-4.5 4.5L1 17h9zm-1.688.688H2.689L5.5 20.5l2.813-2.813zM3 0a3 3 0 013 3v10c0 1.49 2 4 2 4H3s2-2.51 2-4V3a2 2 0 00-4 0v4H0V3a3 3 0 013-3z" />
    <path
      d="M18.313 17.688L15.5 20.5l-2.813-2.813h5.626zM8.313 17.688L5.5 20.5l-2.813-2.813h5.626z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;