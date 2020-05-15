import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M20 14V9h1v4h4v1h-5z" />
    <path d="M25 9c-1.38 0-2.626.564-3.531 1.469l.687.687A4.01 4.01 0 0125 10a4 4 0 110 8 3.975 3.975 0 01-3.563-2.219l-.875.438C21.386 17.853 23.047 19 25 19a5 5 0 100-10z" />
    <path d="M25 11c-.828 0-1.582.332-2.125.875l.719.719A1.982 1.982 0 0125 12a2 2 0 11-1.781 2.906l-.875.438C22.839 16.319 23.83 17 25 17a3 3 0 000-6zM5 14V9h1v4h4v1H5z" />
    <path d="M10 9c-1.38 0-2.626.564-3.531 1.469l.687.687A4.01 4.01 0 0110 10a4 4 0 110 8 3.975 3.975 0 01-3.563-2.219l-.875.438C6.386 17.853 8.046 19 10 19a5 5 0 100-10z" />
    <path d="M10 11c-.828 0-1.582.332-2.125.875l.719.719A1.982 1.982 0 0110 12a2 2 0 11-1.781 2.906l-.875.438C7.839 16.319 8.83 17 10 17a3 3 0 000-6z" />
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
  </svg>
);

export default SvgComponent;