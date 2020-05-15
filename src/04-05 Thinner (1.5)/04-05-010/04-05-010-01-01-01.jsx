import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M20.5 0C10.835 0 3 7.835 3 17.5S10.835 35 20.5 35 38 27.165 38 17.5 30.165 0 20.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M13.406 33.469c.099.044.182.114.281.156.358.151.756.216 1.125.344.689-2.555 2.916-4.469 5.688-4.469s4.999 1.914 5.687 4.469c.37-.128.767-.193 1.125-.344.1-.042.183-.112.281-.156C26.69 30.34 23.92 28 20.5 28c-3.42 0-6.191 2.34-7.094 5.469zM3.5 33v5h1v-5h-1z" />
    <path d="M4 29l-4 4 .719.719L4 30.406l3.281 3.313L8 33l-4-4zM36.5 33v5h1v-5h-1z" />
    <path d="M37 29l-4 4 .719.719L37 30.406l3.281 3.313L41 33l-4-4z" />
  </svg>
);

export default SvgComponent;