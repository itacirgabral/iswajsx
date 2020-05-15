import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13 11c-7 0-7 6-7 6 0 6 6 6 6 6h3v-2h-3c-4 0-4-4-4-4 0-4 5-4 5-4 6 0 6 6 6 6 0 7-7 7-7 7-5.519 0-8.484-2.54-10.094-5.281L0 21.812C3.872 27.997 12 28 12 28c9 0 9-9 9-9 0-8-8-8-8-8z" />
    <path
      d="M13 13s-5 0-5 4c0 0 0 4 4 4h3v2h2.938c.647-.978 1.062-2.27 1.062-4 0 0 0-6-6-6z"
      fill="#fff"
    />
    <path d="M19 0v13.438c1.152 1.184 2 2.946 2 5.562V0h-2zM8 3v9.656a5.87 5.87 0 012-1.187V3H8zM2 9L.594 10.406 6.156 16a6.46 6.46 0 01.782-2.063L2 9z" />
  </svg>
);

export default SvgComponent;
