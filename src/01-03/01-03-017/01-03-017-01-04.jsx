import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 17h14v13H0z" />
    <path fill="#fff" d="M2 19h10v9H2z" />
    <path d="M13 3h2v12h-2zM8 0v15h2V0H8zM16 15v9s0 3-1 3v3s3 0 3-5V15h-2z" />
  </svg>
);

export default SvgComponent;