import React from "react";

const SvgComponent = (props) => (
  <svg width={25} height={35} {...props}>
    <path d="M21 8H5l8-8 8 8zM9 8v27h2V8H9zM15 8v27h2V8h-2z" />
    <path
      d="M8 14c-3.314 0-6 1.343-6 3s2.686 3 6 3h1v5h2v-6H9v-5H8zm9 0v5.875l-2-2v9.25l3.25-3.25c.254-.047.497-.11.75-.156v-3.907c2.33-.411 4-1.506 4-2.812 0-1.657-2.686-3-6-3zM11 8v27h4V8h-4z"
      fill="#fff"
    />
    <path d="M8 13c-4.418 0-8 2.462-8 5.5S3.582 24 8 24h4v-4H8c-3.314 0-6-1.343-6-3s2.686-3 6-3h1v-1H8zm9 0v1c3.314 0 6 1.343 6 3 0 1.306-1.67 2.4-4 2.813v4c3.45-.61 6-2.75 6-5.313 0-3.038-3.582-5.5-8-5.5zM12 28l5.5-5.5L12 17v11z" />
    <path
      d="M13 1.438L7.437 7h11.125L13 1.437zM13 19.437v6.125l3.063-3.062L13 19.437z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
