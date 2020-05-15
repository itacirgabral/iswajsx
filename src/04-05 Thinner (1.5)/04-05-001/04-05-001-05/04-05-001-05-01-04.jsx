import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M17.5 20a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z" />
    <path d="M14.097 23.011c-.096.165-.239.312-.31.486-.195.482-.309.991-.309 1.503 0 .512.114 1.021.31 1.503.195.481.493.935.884 1.325.39.391.844.689 1.325.884.482.196.991.31 1.503.31.512 0 1.021-.114 1.503-.31.174-.07.321-.213.486-.31l-5.392-5.39z" />
  </svg>
);

export default SvgComponent;
