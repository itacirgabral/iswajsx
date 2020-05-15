import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M17.5 22c-3.59 0-6.5 1.343-6.5 3s2.91 3 6.5 3 6.5-1.343 6.5-3-2.91-3-6.5-3zm0 1.5c2.761 0 5 .672 5 1.5s-2.239 1.5-5 1.5-5-.672-5-1.5 2.239-1.5 5-1.5zM11 21a4 4 0 100 8v-1c-1.38 0-2.5-1.343-2.5-3s1.12-3 2.5-3v-1zM24 21v1c1.38 0 2.5 1.343 2.5 3s-1.12 3-2.5 3v1a4 4 0 100-8z" />
  </svg>
);

export default SvgComponent;
