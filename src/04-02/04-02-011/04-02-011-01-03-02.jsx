import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 10H0V9h4V5h1v5z" />
    <path d="M0 5c0 1.38.564 2.626 1.469 3.531l.687-.687A4.01 4.01 0 011 5a4 4 0 118 0 3.975 3.975 0 01-2.219 3.563l.438.874C8.853 8.616 10 6.954 10 5A5 5 0 000 5z" />
    <path d="M2 5c0 .828.332 1.582.875 2.125l.719-.719A1.982 1.982 0 013 5a2 2 0 112.906 1.781l.438.875C7.319 7.161 8 6.17 8 5a3 3 0 00-6 0z" />
  </svg>
);

export default SvgComponent;
