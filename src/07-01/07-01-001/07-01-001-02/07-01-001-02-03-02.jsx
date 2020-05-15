import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M31.656 32H20.344L.719 51.625l5.656 5.656L31.656 32z" />
    <path d="M42.656 21H31.344l-11 11h11.312l11-11z" fill="#fff" />
    <path d="M51.625.719L31.344 21h11.312L57.281 6.375 51.625.719zM30.5 23c3.666 0 6.724 2.568 7.5 6h-1.156a6.729 6.729 0 00-6.344-4.5 6.729 6.729 0 00-6.344 4.5H23c.776-3.432 3.834-6 7.5-6z" />
  </svg>
);

export default SvgComponent;
