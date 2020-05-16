import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M10 25.25v1.5h4v-1.5h-4zm11 0v1.5h4v-1.5h-4zM17.5 24a2 2 0 00-2 2v.75h4V26a2 2 0 00-2-2z" />
    <path d="M13.5 26.75V25a4 4 0 118 0v1.75h-.844L20.5 25c0-1.38-1.343-2.5-3-2.5s-3 1.12-3 2.5l-.156 1.75H13.5z" />
  </svg>
);

export default SvgComponent;
