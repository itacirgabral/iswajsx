import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M23.25 34v7s-.023 3.837.5 5.656C24.51 49.298 27.5 54 27.5 54h-1.75s-2.702-4.46-3.406-6.938C21.788 45.11 21.75 41 21.75 41v-7h1.5zm-10 0v7s-.038 4.11-.594 6.063C11.952 49.538 9.25 54 9.25 54H7.5s2.99-4.702 3.75-7.344c.523-1.819.5-5.656.5-5.656v-7h1.5zM33 49a3 3 0 01-3 3v-1a2 2 0 002-2v-1a2 2 0 00-2-2v-1a3 3 0 013 3v1zM30 43v11h-1V43h1z" />
  </svg>
);

export default SvgComponent;
