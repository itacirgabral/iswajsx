import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 6.5C7.835 6.5 0 14.335 0 24s7.835 17.5 17.5 17.5S35 33.665 35 24 27.165 6.5 17.5 6.5zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M21 0h-7v6.844a17.61 17.61 0 013.5-.344c1.198 0 2.37.115 3.5.344V0zm0 41.156a17.61 17.61 0 01-3.5.344 17.61 17.61 0 01-3.5-.344V48h7v-6.844z" />
  </svg>
);

export default SvgComponent;
