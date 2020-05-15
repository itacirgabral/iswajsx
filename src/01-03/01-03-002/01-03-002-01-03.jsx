import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M24 22a8 8 0 11-16 0 8 8 0 1116 0z" />
    <path d="M8 0h2v22H8z" />
    <path d="M19.313 4.688L8 16l1.813 1L20.718 6.094l-1.407-1.407zM1.938 15.094L.5 16.5 9 25v-2.813l-7.063-7.093z" />
  </svg>
);

export default SvgComponent;
