import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 0a4 4 0 00-4 4v1h1V4a3 3 0 013-3h1c1.657 0 3 1.79 3 4v9c0 3.283-4 9-4 9h10s-4-5.717-4-9V5a5 5 0 00-5-5H9z" />
    <path d="M0 5l5.5 5.5L11 5H9L5.5 8.5 2 5H0zM0 13v1h12v-1H0zm16 0v1h10v-1H16zm16 0v1h8v-1h-8z" />
    <path d="M26 0a4 4 0 014 4v6c0 2.539 3 7 3 7h-8s3-4.461 3-7V4a2 2 0 00-4 0v4h-2V4a4 4 0 014-4zM22 17l7 7 7-7h-2l-5 5-5-5h-2z" />
  </svg>
);

export default SvgComponent;
