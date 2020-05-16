import React from "react";

const SvgComponent = (props) => (
  <svg width={48} height={35} {...props}>
    <path d="M24 0C14.335 0 6.5 7.835 6.5 17.5S14.335 35 24 35s17.5-7.835 17.5-17.5S33.665 0 24 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M0 14v7h6.844a17.61 17.61 0 01-.344-3.5c0-1.198.115-2.37.344-3.5H0zm41.156 0c.23 1.13.344 2.302.344 3.5s-.115 2.37-.344 3.5H48v-7h-6.844zM16.906 33.469c.099.044.182.114.281.156.359.151.756.216 1.125.344.69-2.555 2.916-4.469 5.688-4.469s4.999 1.914 5.687 4.469c.37-.128.767-.193 1.126-.344.099-.042.182-.112.28-.156C30.192 30.34 27.42 28 24 28s-6.19 2.34-7.094 5.469z" />
  </svg>
);

export default SvgComponent;
