import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M29.9 0H20v9.9L29.9 0z" />
    <path d="M2.322 2.121L10.101 9.9a1 1 0 001.414 0c.195-.195.31-.45.31-.707v-4.64l1.988 1.989 5.48 5.48a3 3 0 004.243 0c1.171-1.172.855-3.388-.708-4.95l4.243-4.243a6 6 0 010 8.486l-2.121 2.121a5 5 0 01-7.071 0L13.79 9.347a2.98 2.98 0 01-.862 1.967 3 3 0 01-4.243 0L.908 3.536 2.322 2.12z" />
  </svg>
);

export default SvgComponent;
