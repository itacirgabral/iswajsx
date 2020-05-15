import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 0v40L0 15.75l1.719-1L12 32.594V0h2z" />
    <path
      d="M12 0v32.594L1.719 14.75 0 15.75v-1.156l2.094-1.219L11 28.813V0h1zM0 15.75L14 40h-1.156L0 17.75v-2z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;