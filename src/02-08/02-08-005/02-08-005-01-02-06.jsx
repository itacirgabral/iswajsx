import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M21 17l-7 7-7-7h14zm-2.406 1H9.406L14 22.563 18.594 18zM11 0a4 4 0 014 4v6c0 2.539 3 7 3 7h-8s3-4.461 3-7V4a2 2 0 00-4 0v4H7V4a4 4 0 014-4z" />
    <path d="M27 11v1H17v-1h10zm-16 0v1H0v-1h11z" />
    <path d="M18.594 18L14 22.563 9.406 18h9.188z" fill="#fff" />
  </svg>
);

export default SvgComponent;
