import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 15v15h8V15h-8zM10 0v15h2V0h-2zM18.5 2L12 13.281V15h1.281L20.22 3 18.5 2zM0 15v2h10v-2H0z" />
    <path d="M21.656 9.344L16 15h2v.813l5.063-5.063-1.407-1.406zM.844 23.469l-.5 1.937L10 28v-2.094L.844 23.47z" />
  </svg>
);

export default SvgComponent;