import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={48} {...props}>
    <path d="M9 48V0h1v48H9z" />
    <path d="M7.5 27a7.5 7.5 0 100 15H15v-1H7.5a6.5 6.5 0 110-13H16v-1H7.5z" />
    <path d="M7.5 30a4.5 4.5 0 000 9H15v-1H7.5a3.5 3.5 0 110-7H16v-1H7.5z" />
    <path d="M15 34v12l6-6-6-6zm1 2.438L19.594 40 16 43.563v-7.126z" />
    <path
      d="M7.5 28a6.5 6.5 0 100 13H8v1h1v-4H8v1h-.5a4.5 4.5 0 010-9H16v-2H7.5zM10 38v4h1v-1h4v-2h-4v-1h-1z"
      fill="#fff"
    />
    <path d="M7.5 7a7.5 7.5 0 100 15H16v-1H7.5a6.5 6.5 0 110-13H15V7H7.5z" />
    <path d="M7.5 10a4.5 4.5 0 000 9H16v-1H7.5a3.5 3.5 0 110-7H15v-1H7.5z" />
    <path d="M15 3v12l6-6-6-6zm1 2.438L19.594 9 16 12.563V5.436z" />
    <path
      d="M7.5 8a6.5 6.5 0 100 13H8v1h1v-4H8v1h-.5a4.5 4.5 0 010-9H15V8H7.5zM10 18v4h1v-1h5v-2h-5v-1h-1zM16 36.438v7.124L19.594 40 16 36.437zM16 5.438v7.125L19.594 9 16 5.437z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
