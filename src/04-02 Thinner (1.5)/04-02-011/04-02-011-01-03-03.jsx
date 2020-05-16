import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={10} {...props}>
    <path d="M10 5v5H9V6H5V5h5z" />
    <path d="M5 10c1.38 0 2.626-.564 3.531-1.469l-.687-.687A4.01 4.01 0 015 9a4 4 0 110-8c1.568 0 2.907.905 3.563 2.219l.874-.438C8.616 1.147 6.954 0 5 0a5 5 0 000 10z" />
    <path d="M5 8c.828 0 1.582-.332 2.125-.875l-.719-.719A1.982 1.982 0 015 7a2 2 0 111.781-2.906l.875-.438C7.161 2.681 6.17 2 5 2a3 3 0 000 6z" />
  </svg>
);

export default SvgComponent;
