import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M54 13H12v4h42v-4zM10 25l-5 5-.719-.719L8.563 25 4.28 20.719 5 20l5 5z" />
    <path d="M6 25.5v-1H0v1h6zM10 15l-5 5-.719-.719L8.563 15 4.28 10.719 5 10l5 5z" />
    <path d="M6 15.5v-1H0v1h6zM10 5l-5 5-.719-.719L8.563 5 4.28.719 5 0l5 5z" />
    <path d="M6 5.5v-1H0v1h6z" />
  </svg>
);

export default SvgComponent;
