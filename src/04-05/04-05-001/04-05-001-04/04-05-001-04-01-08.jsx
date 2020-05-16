import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
    <path d="M17.5 20a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z" />
    <path d="M20.328 22.172c-.244-.245-.532-.429-.817-.597l-1.127 1.127c-1.27 1.27-3.062 1.698-4.751 1.348a3.962 3.962 0 004.817 4.817c-.35-1.689.078-3.48 1.348-4.75l1.127-1.128c-.168-.285-.352-.573-.597-.817z" />
  </svg>
);

export default SvgComponent;
