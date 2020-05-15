import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 10V0l5 5-5 5zm1-2.438L17.563 5 15 2.437v5.125zM9 3a9 9 0 00-9 9v6h1v-6a8 8 0 018-8h5V3H9z" />
    <path d="M9 4a8 8 0 00-8 8v6h2v-6a6 6 0 016-6h5V4H9z" fill="#fff" />
    <path d="M9 6a6 6 0 00-6 6v6h1v-6a5 5 0 015-5h5V6H9zM19 18V8l5 5-5 5zm1-2.438L22.563 13 20 10.437v5.125z" />
    <path d="M14 11a9 9 0 00-9 9v6h1v-6a8 8 0 018-8h5v-1h-5z" />
    <path d="M14 12a8 8 0 00-8 8v6h2v-6a6 6 0 016-6h5v-2h-5z" fill="#fff" />
    <path d="M14 14a6 6 0 00-6 6v6h1v-6a5 5 0 015-5h5v-1h-5z" />
    <path
      d="M15 7.562V2.437L17.563 5 15 7.562zM20 15.562v-5.125L22.563 13 20 15.562z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
