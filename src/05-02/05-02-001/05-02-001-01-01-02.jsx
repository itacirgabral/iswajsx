import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v40l14-24.25-1.719-1L2 32.594V0H0z" />
    <path
      d="M2 0v32.594L12.281 14.75l1.719 1v-1.156l-2.094-1.219L3 28.813V0H2zm12 15.75L0 40h1.156L14 17.75v-2z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;