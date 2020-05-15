import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M24 22a8 8 0 11-16 0 8 8 0 1116 0zM8 0h2v14H8z" />
    <path d="M19.313 4.688L10 14h2.813l7.906-7.906-1.407-1.407zM1.938 15.094L.5 16.5 7 23v-2.813l-5.063-5.093z" />
  </svg>
);

export default SvgComponent;
