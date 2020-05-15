import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v33.313l14-14V35h2V14.5l-14 14V0H0z" />
    <path d="M6 0v18.813l14-14V35h2V0L8 14V0H6z" />
    <path d="M2 0v28.5l14-14V35h4V4.812l-14 14V0H2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
