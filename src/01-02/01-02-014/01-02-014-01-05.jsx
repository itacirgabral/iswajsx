import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 22a8 8 0 11-16 0 8 8 0 1116 0z" />
    <path d="M8 16c-3.312 0-6 2.688-6 6s2.688 6 6 6V16z" fill="#fff" />
    <path d="M4.406 2.406L2.97 3.812 13.188 14H15v-1L4.406 2.406z" />
    <path d="M7 0h2v13H7z" />
  </svg>
);

export default SvgComponent;
