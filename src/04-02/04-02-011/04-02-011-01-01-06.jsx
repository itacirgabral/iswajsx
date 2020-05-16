import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M25 19h5v-1h-4v-4h-1v5z" />
    <path d="M30 14c0 1.38-.564 2.626-1.469 3.531l-.687-.687A4.01 4.01 0 0029 14a4 4 0 10-8 0c0 1.568.905 2.907 2.219 3.563l-.438.875C21.147 17.614 20 15.954 20 14a5 5 0 1110 0z" />
    <path d="M28 14c0 .828-.332 1.582-.875 2.125l-.719-.719c.362-.362.594-.854.594-1.406a2 2 0 10-2.906 1.781l-.438.875C22.681 16.161 22 15.17 22 14a3 3 0 016 0zM10 19h5v-1h-4v-4h-1v5z" />
    <path d="M15 14c0 1.38-.564 2.626-1.469 3.531l-.687-.687A4.01 4.01 0 0014 14a4 4 0 10-8 0c0 1.568.905 2.907 2.219 3.563l-.438.875C6.147 17.614 5 15.954 5 14a5 5 0 1110 0z" />
    <path d="M13 14c0 .828-.332 1.582-.875 2.125l-.719-.719c.362-.362.594-.854.594-1.406a2 2 0 10-2.906 1.781l-.438.875C7.681 16.161 7 15.17 7 14a3 3 0 016 0z" />
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
  </svg>
);

export default SvgComponent;
