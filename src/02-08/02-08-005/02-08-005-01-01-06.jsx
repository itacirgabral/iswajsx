import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M21 17H7l7 7 7-7zM11 0a4 4 0 014 4v6c0 2.539 3 7 3 7h-8s3-4.461 3-7V4a2 2 0 00-4 0v4H7V4a4 4 0 014-4z" />
    <path d="M27 11v1H17v-1h10zm-16 0v1H0v-1h11z" />
  </svg>
);

export default SvgComponent;