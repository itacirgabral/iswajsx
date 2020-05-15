import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M1 9.9V0h9.9L8.888 2.01H3.01V7.89L1 9.899z" />
    <path d="M5.201 5.657l18.385 18.385L25 22.628 6.615 4.243 5.201 5.657zM13 28l-5.5-5.5L13 17v1.414L8.914 22.5 13 26.586V28z" />
    <path d="M24 12c0 6.075-4.925 11-11 11v-1c5.523 0 10-4.477 10-10v-2h1v2zM6 21L.5 15.5 6 10v1.414L1.914 15.5 6 19.586V21z" />
    <path d="M17 5c0 6.075-4.925 11-11 11v-1c5.523 0 10-4.477 10-10V3h1v2z" />
  </svg>
);

export default SvgComponent;
