import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 5V0H9v4H5v1h5z" />
    <path d="M5 0c1.38 0 2.626.564 3.531 1.469l-.687.687A4.01 4.01 0 005 1a4 4 0 100 8 3.975 3.975 0 003.563-2.219l.874.438C8.616 8.853 6.954 10 5 10A5 5 0 015 0z" />
    <path d="M5 2c.828 0 1.582.332 2.125.875l-.719.719A1.982 1.982 0 005 3a2 2 0 101.781 2.906l.875.438C7.161 7.319 6.17 8 5 8a3 3 0 010-6z" />
  </svg>
);

export default SvgComponent;
