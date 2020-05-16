import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={47} {...props}>
    <path d="M11.188 13.188C4.643 15.72 0 22.062 0 29.5 0 39.165 7.835 47 17.5 47S35 39.165 35 29.5c0-7.438-4.643-13.78-11.188-16.313l-.5 1.407C29.27 16.923 33.5 22.719 33.5 29.5c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-6.781 4.231-12.577 10.188-14.906l-.5-1.406zM11.5 3a3 3 0 106 0 3 3 0 00-6 0z" />
    <path d="M16.5 3.75v-1.5h7v1.5h-7zM11.5 10a3 3 0 106 0 3 3 0 00-6 0z" />
    <path d="M16.5 10.75v-1.5h7v1.5h-7z" />
  </svg>
);

export default SvgComponent;
