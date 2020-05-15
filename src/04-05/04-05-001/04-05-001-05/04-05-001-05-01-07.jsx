import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
    <path d="M17.5 20a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z" />
    <path d="M18.5 28.813c.184-.049.39-.052.563-.125.478-.203.919-.482 1.28-.844.363-.362.642-.803.844-1.282.203-.478.313-1.01.313-1.562s-.11-1.084-.313-1.563a4.012 4.012 0 00-.843-1.28 4.012 4.012 0 00-1.282-.844c-.173-.074-.378-.077-.562-.125v7.625z" />
  </svg>
);

export default SvgComponent;
