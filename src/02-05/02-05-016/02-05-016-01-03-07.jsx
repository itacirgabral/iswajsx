import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M25 10v2h-9v-2h9zm-12 0v2H0v-2h13zM25 18l7-7-7-7v2.844L29.156 11 25 15.156V18zM19 5L14.5.5 10 5h1.406L14.5 1.906 17.594 5H19z" />
    <path d="M14 5v10c0 1.105-.672 2-1.5 2s-1.5-.895-1.5-2v-1H6v1c0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4V5h-1z" />
  </svg>
);

export default SvgComponent;
