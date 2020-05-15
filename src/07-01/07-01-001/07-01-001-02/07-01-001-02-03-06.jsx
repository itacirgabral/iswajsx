import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M18.344 34h11.312L6.375 57.281.719 51.625 18.344 34z" />
    <path d="M29.344 23h11.312l-11 11H18.344l11-11z" fill="#fff" />
    <path d="M51.625.719l5.656 5.656L40.656 23H29.344L51.625.719zM28.5 25c-3.666 0-6.724 2.568-7.5 6h1.156a6.729 6.729 0 016.344-4.5 6.729 6.729 0 016.344 4.5H36c-.776-3.432-3.834-6-7.5-6z" />
  </svg>
);

export default SvgComponent;