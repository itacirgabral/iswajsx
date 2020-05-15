import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M20 9c-.022.726.305 1.332.594 1.969l-2.125 2.156.687.719 2.094-2.094c.204.192.413.347.656.5L21 15.594l.969.281.843-3.156c.372.133.775.177 1.188.219V17h1v-4.063c.413-.04.816-.085 1.188-.218l.843 3.156.969-.281-.906-3.344a4.17 4.17 0 00.656-.5l2.094 2.094.687-.719-2.125-2.156C28.775 10.389 29 9.714 29 9h-1c0 1.38-1.567 2.5-3.5 2.5S21 10.38 21 9h-1z" />
  </svg>
);

export default SvgComponent;
