import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 16v10l5-5-5-5zm1 2.438L17.563 21 15 23.563v-5.125zM9 23a9 9 0 01-9-9V8h1v6a8 8 0 008 8h5v1H9z" />
    <path d="M9 22a8 8 0 01-8-8V8h2v6a6 6 0 006 6h5v2H9z" fill="#fff" />
    <path d="M9 20a6 6 0 01-6-6V8h1v6a5 5 0 005 5h5v1H9zM19 8v10l5-5-5-5zm1 2.438L22.563 13 20 15.563v-5.126z" />
    <path d="M14 15a9 9 0 01-9-9V0h1v6a8 8 0 008 8h5v1h-5z" />
    <path d="M14 14a8 8 0 01-8-8V0h2v6a6 6 0 006 6h5v2h-5z" fill="#fff" />
    <path d="M14 12a6 6 0 01-6-6V0h1v6a5 5 0 005 5h5v1h-5z" />
    <path
      d="M15 18.438v5.125L17.563 21 15 18.437zM20 10.438v5.124L22.563 13 20 10.437z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;