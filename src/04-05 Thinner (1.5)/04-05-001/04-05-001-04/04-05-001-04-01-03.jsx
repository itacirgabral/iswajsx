import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M17.5 20a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z" />
    <path d="M13.5 25c0 .255.048.508.094.75h3.062c1.304 0 2.813 2.719 2.813 2.719A3.973 3.973 0 0021.5 25a3.973 3.973 0 00-2.031-3.469s-1.509 2.719-2.813 2.719h-3.062c-.046.242-.094.495-.094.75z" />
  </svg>
);

export default SvgComponent;
